import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

export default function ActiveJobsCard() {
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
        {/* Job 1 */}

        <div className="p-6">
          <Badge className="mb-3">IN PROGRESS</Badge>

          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Garden Landscaping
              </h3>

              <p className="mt-1 text-sm text-gray-500">Ends Today • 5:30 PM</p>
            </div>

            <span className="font-bold text-[#1A362D]">ETB 2,400</span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-3/4 bg-[#1A362D]" />
          </div>

          <p className="mt-2 text-xs text-gray-500">75% Complete</p>
        </div>

        {/* Job 2 */}

        <div className="p-6">
          <Badge variant="pending" className="mb-3">
            STARTS TOMORROW
          </Badge>

          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Kitchen Faucet Repair
              </h3>

              <p className="mt-1 text-sm text-gray-500">Tomorrow • 09:00 AM</p>
            </div>

            <span className="font-bold text-[#1A362D]">ETB 850</span>
          </div>
        </div>
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
