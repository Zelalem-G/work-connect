"use client";

import { useEffect, useState } from "react";

import { PortfolioHeader } from "@/features/worker-portfolio/PortfolioHeader";
import { UploadPortfolioCard } from "@/features/worker-portfolio/UploadPortfolioCard";
import { PortfolioGrid } from "@/features/worker-portfolio/PortfolioGrid";
import { Card } from "@/components/card";
import { getCurrentWorker } from "@/services/worker.service";
import {
  createPortfolioItem,
  getPortfolioByWorker,
} from "@/services/portfolio.service";

export default function WorkerPortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadPortfolio() {
      try {
        setLoading(true);
        setError("");
        const worker = await getCurrentWorker();

        if (!worker) {
          throw new Error(
            "You need to be signed in as a worker to manage portfolio items.",
          );
        }

        const items = await getPortfolioByWorker(worker.id);

        if (mounted) {
          setPortfolioItems(items);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message || "Unable to load your portfolio right now.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadPortfolio();

    return () => {
      mounted = false;
    };
  }, []);

  async function handleUpload(imageUrl) {
    if (!imageUrl) {
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      const worker = await getCurrentWorker();

      if (!worker) {
        throw new Error(
          "You need to be signed in as a worker to add portfolio items.",
        );
      }

      const created = await createPortfolioItem({
        workerId: worker.id,
        image: imageUrl,
        title: "Recent Project",
        description: "Uploaded from the portfolio manager",
      });

      setPortfolioItems((prev) => [created, ...prev]);
    } catch (err) {
      setError(err.message || "Unable to add this portfolio item right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      <PortfolioHeader />

      <UploadPortfolioCard onUpload={handleUpload} submitting={submitting} />

      {loading ? (
        <Card className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
          Loading your portfolio...
        </Card>
      ) : error ? (
        <Card className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center text-red-600">
          {error}
        </Card>
      ) : (
        <PortfolioGrid items={portfolioItems} />
      )}
    </div>
  );
}
