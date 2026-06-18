import Link from "next/link";

import RequestHeader from "@/features/customer-requests/RequestHeader";
import RequestOverview from "@/features/customer-requests/RequestOverview";
import RequestDescription from "@/features/customer-requests/RequestDescription";
import RequestPhotos from "@/features/customer-requests/RequestPhotos";
import RequestTimeline from "@/features/customer-requests/RequestTimeline";

import WorkerSummarySidebar from "@/features/customer-requests/WorkerSummarySidebar";
import RequestActions from "@/features/customer-requests/RequestActions";

export default function RequestDetailsPage() {
  // Dummy data for frontend development

  const request = {
    id: 1,

    title: "Kitchen Plumbing Repair",

    status: "IN PROGRESS",

    requestedDate: "June 10, 2026",

    preferredDate: "June 12, 2026",

    location: "Bole, Addis Ababa",

    budget: "1,500 ETB",

    description:
      "My kitchen sink has been leaking for several days and the water pressure has also decreased. I would like someone to inspect the pipes, repair any leaks, and make sure everything is functioning properly. The issue seems to be underneath the sink cabinet.",

    photos: ["/api/placeholder/400/300", "/api/placeholder/400/300"],

    timeline: [
      {
        title: "Request Submitted",
        date: "June 10, 2026",
        completed: true,
      },
      {
        title: "Worker Accepted",
        date: "June 10, 2026",
        completed: true,
      },
      {
        title: "Work In Progress",
        date: "June 11, 2026",
        completed: true,
      },
      {
        title: "Job Completed",
        date: "",
        completed: false,
      },
    ],
  };

  const worker = {
    id: 12,

    name: "Abebe Kebede",

    profession: "Certified Plumber",

    rating: 4.9,

    reviews: 124,

    verified: true,

    avatar: "/api/placeholder/200/200",

    responseTime: "Usually within 2 hours",

    estimatedDuration: "1 Day",
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <RequestHeader title={request.title} status={request.status} />

      {/* Main Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side */}

        <div className="lg:col-span-8 space-y-6">
          <RequestOverview request={request} worker={worker} />

          <RequestDescription description={request.description} />

          <RequestPhotos photos={request.photos} />

          <RequestTimeline timeline={request.timeline} />
        </div>

        {/* Right Side */}

        <div className="lg:col-span-4 space-y-6">
          <WorkerSummarySidebar
            worker={worker}
            status={request.status}
            requestedDate={request.requestedDate}
            estimatedDuration={worker.estimatedDuration}
            responseTime={worker.responseTime}
          />

          <RequestActions status={request.status} />
        </div>
      </div>
    </div>
  );
}
