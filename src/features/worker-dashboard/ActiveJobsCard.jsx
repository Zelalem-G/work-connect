import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

export default function ActiveJobsCard({ requests }) {
  const activeRequests = (requests || []).filter(
    (request) =>
      request.status === "Accepted" || request.status === "In Progress",
  );

  return (
    <Card className="p-0 overflow-hidden">
      <div className="border-b border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Active Jobs</h2>

            <p className="mt-1 text-sm text-gray-500">Your current schedule.</p>
          </div>

          <button className="text-sm font-semibold text-[#1A362D] hover:underline">
            View All
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {activeRequests.length > 0 ? (
          activeRequests.slice(0, 2).map((request) => (
            <div key={request.id} className="p-6">
              <Badge className="mb-3">{request.status.toUpperCase()}</Badge>

              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {request.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {request.location}
                  </p>
                </div>

                <span className="font-bold text-[#1A362D]">
                  {request.budget}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-sm text-gray-500">
            No active jobs right now.
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 bg-gray-50 p-4">
        <Button
          variant="secondary"
          fullWidth
          className="bg-white font-semibold"
        >
          View Job History
        </Button>
      </div>
    </Card>
  );
}
