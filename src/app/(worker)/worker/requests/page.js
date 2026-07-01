import RequestFilters from "@/features/worker-requests/RequestFilters";
import WorkerRequestList from "@/features/worker-requests/WorkerRequestList";

export default function WorkerRequestsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#1A362D]">
            My Requests
          </h1>

          <p className="mt-2 text-gray-600">
            Review, manage, and respond to incoming customer service requests.
          </p>
        </div>

        <div className="w-full lg:w-80">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search requests..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 shadow-sm outline-none transition focus:border-[#1A362D]"
            />
          </div>
        </div>
      </div>

      {/* Status Filters */}
      <RequestFilters />

      {/* Request List */}
      <WorkerRequestList />
    </div>
  );
}
