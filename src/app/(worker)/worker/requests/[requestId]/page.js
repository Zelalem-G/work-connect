"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import CustomerInfoCard from "@/features/worker-request-details/CustomerInfoCard";
import RequestDetailsCard from "@/features/worker-request-details/RequestDetailsCard";
import ProjectLocationCard from "@/features/worker-request-details/ProjectLocationCard";
import ProjectPhotosCard from "@/features/worker-request-details/ProjectPhotosCard";
import RequestSidebar from "@/features/worker-request-details/RequestSidebar";
import { Card } from "@/components/card";
import { getRequestById } from "@/services/request.service";
import { getWorkerById } from "@/services/worker.service";

export default function WorkerRequestDetailsPage() {
  const params = useParams();
  const [request, setRequest] = useState(null);
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadRequest() {
      try {
        const requestData = await getRequestById(params.requestId);
        const workerData = requestData
          ? await getWorkerById(requestData.workerId)
          : null;

        if (mounted) {
          setRequest(requestData);
          setWorker(workerData);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message || "Unable to load this request right now.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadRequest();

    return () => {
      mounted = false;
    };
  }, [params.requestId]);

  const headerStatus = useMemo(() => {
    if (!request?.status) {
      return "Pending Request";
    }

    switch (request.status) {
      case "accepted":
        return "Accepted Request";
      case "completed":
        return "Completed Request";
      case "cancelled":
      case "declined":
        return "Declined Request";
      default:
        return "Pending Request";
    }
  }, [request]);

  return (
    <div className="space-y-8">
      <Link
        href="/worker/requests"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#1A362D]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Requests
      </Link>

      {loading ? (
        <Card className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
          Loading request details...
        </Card>
      ) : error ? (
        <Card className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center text-red-600">
          {error}
        </Card>
      ) : !request ? (
        <Card className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
          Request not found.
        </Card>
      ) : (
        <>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#1A362D]">
                {request.title}
              </h1>

              <p className="mt-2 text-gray-600">
                Review the request carefully before accepting or declining the
                service.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              {headerStatus}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <CustomerInfoCard request={request} worker={worker} />

              <RequestDetailsCard request={request} />

              <ProjectLocationCard request={request} />

              <ProjectPhotosCard request={request} />
            </div>

            <div className="lg:col-span-4">
              <RequestSidebar request={request} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
