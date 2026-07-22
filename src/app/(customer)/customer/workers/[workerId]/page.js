"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import WorkerProfileHeader from "@/features/workers/WorkerProfileHeader";
import WorkerAbout from "@/features/workers/WorkerAbout";
import WorkerReviews from "@/features/workers/WorkerReviews";
import WorkerBookingCard from "@/features/workers/WorkerBookingCard";
import WorkerPortfolio from "@/features/workers/WorkerPortfolio";
import WorkerServiceArea from "@/features/workers/WorkerServiceArea";
import { Card } from "@/components/card";
import { getWorkerProfileData } from "@/services/worker.service";
import { getWorkerReviews } from "@/services/review.service";

function toReviewViewModel(review) {
  const date = review.createdAt
    ? new Date(review.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Recently reviewed";

  return {
    id: review.id,
    initials: review.customerId?.slice(0, 2).toUpperCase() || "CU",
    name: review.customerId || "Verified customer",
    date,
    project: "Service completed",
    rating: review.rating || 0,
    comment: review.comment || "The customer left a short review.",
  };
}

export default function WorkerProfilePage() {
  const params = useParams();
  const workerId = params?.workerId;
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadWorkerProfile() {
      if (!workerId) {
        return;
      }

      try {
        setLoading(true);
        setError("");

        const [workerProfile, workerReviews] = await Promise.all([
          getWorkerProfileData(workerId),
          getWorkerReviews(workerId),
        ]);

        if (mounted) {
          setProfile(workerProfile);
          setReviews(workerReviews);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err.message || "Unable to load this worker profile right now.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadWorkerProfile();

    return () => {
      mounted = false;
    };
  }, [workerId]);

  const worker = useMemo(() => {
    if (!profile?.worker) {
      return null;
    }

    const ratingData = profile.rating || {
      rating: profile.worker.rating || 0,
      totalReviews: profile.worker.totalReviews || reviews.length,
    };

    return {
      id: profile.worker.id,
      name: profile.worker.fullName,
      title: profile.worker.primarySkill || "Skilled professional",
      image: profile.worker.profileImage || "/api/placeholder/300/300",
      verified: profile.worker.verified,
      available: profile.worker.availability === "available",
      rating: ratingData.rating || 0,
      reviewCount: ratingData.totalReviews || reviews.length,
      location: `${profile.worker.city || "Addis Ababa"}, ET`,
      price: "100 ETB /hr",
      yearsExperience: `${profile.worker.experience || 0}+`,
      completedJobs: profile.worker.completedJobs || 0,
      successRate: `${profile.worker.responseRate || 0}%`,
      activeJobs: 0,
      responseTime: "Usually responds within 2 hours",
      availability:
        profile.worker.availability === "available"
          ? "Available now"
          : "Busy right now",
      serviceArea: (profile.worker.serviceAreas || [
        profile.worker.city || "Addis Ababa",
      ])[0],
      workType: "On-Site",
      skills: profile.worker.skills || [],
      about: [
        profile.worker.bio ||
          "This professional is ready to help with your next project.",
      ],
      portfolio: (profile.portfolio || []).map((item) => item.image),
      reviews: (reviews || []).map(toReviewViewModel),
    };
  }, [profile, reviews]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {loading ? (
        <div className="lg:col-span-12">
          <Card className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
            Loading worker profile...
          </Card>
        </div>
      ) : error ? (
        <div className="lg:col-span-12">
          <Card className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center text-red-600">
            {error}
          </Card>
        </div>
      ) : !worker ? (
        <div className="lg:col-span-12">
          <Card className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
            No worker profile found for this request.
          </Card>
        </div>
      ) : (
        <>
          <div className="space-y-8 lg:col-span-8">
            <WorkerProfileHeader worker={worker} />

            <WorkerAbout worker={worker} />

            <WorkerReviews reviews={worker.reviews} />
          </div>

          <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <WorkerBookingCard worker={worker} />

            <WorkerPortfolio portfolio={worker.portfolio} />

            <WorkerServiceArea worker={worker} />
          </aside>
        </>
      )}
    </div>
  );
}
