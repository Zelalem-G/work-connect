import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";

export default function CustomerInfoCard({ request, worker }) {
  const customerName = worker?.fullName || "Customer";
  const customerCity = worker?.city || request?.location || "Addis Ababa";

  return (
    <Card className="space-y-6">
      <div className="flex items-start gap-5">
        <Avatar
          src={worker?.profileImage || "/api/placeholder/150/150"}
          alt={customerName}
          size="lg"
        />

        <div className="flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1A362D]">
                {customerName}
              </h2>

              <p className="mt-1 text-gray-500">
                Customer request for {request?.title}
              </p>
            </div>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Verified Customer
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              ⭐<span>4.9 Rating</span>
            </div>

            <div className="flex items-center gap-2">
              📍
              <span>{customerCity}</span>
            </div>

            <div className="flex items-center gap-2">
              📞
              <span>+251 91 234 5678</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold text-[#1A362D]">
            {worker?.completedJobs ?? 0}
          </p>
          <p className="mt-1 text-sm text-gray-500">Completed Requests</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold text-[#1A362D]">
            {worker?.responseRate ?? 0}%
          </p>
          <p className="mt-1 text-sm text-gray-500">Acceptance Rate</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold text-[#1A362D]">
            {worker?.responseRate ? "Fast" : "Ready"}
          </p>
          <p className="mt-1 text-sm text-gray-500">Avg. Response Time</p>
        </div>
      </div>
    </Card>
  );
}
