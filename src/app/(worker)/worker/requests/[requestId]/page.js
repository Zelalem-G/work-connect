import Link from "next/link";

import CustomerInfoCard from "@/features/worker-request-details/CustomerInfoCard";
import RequestDetailsCard from "@/features/worker-request-details/RequestDetailsCard";
import ProjectLocationCard from "@/features/worker-request-details/ProjectLocationCard";
import ProjectPhotosCard from "@/features/worker-request-details/ProjectPhotosCard";
import RequestSidebar from "@/features/worker-request-details/RequestSidebar";

export default function WorkerRequestDetailsPage() {
  return (
    <div className="space-y-8">
      {/* Back Navigation */}
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

      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#1A362D]">
            Kitchen Plumbing Repair
          </h1>

          <p className="mt-2 text-gray-600">
            Review the request carefully before accepting or declining the
            service.
          </p>
        </div>

        <span className="inline-flex w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Pending Request
        </span>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-8">
          <CustomerInfoCard />

          <RequestDetailsCard />

          <ProjectLocationCard />

          <ProjectPhotosCard />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4">
          <RequestSidebar />
        </div>
      </div>
    </div>
  );
}
