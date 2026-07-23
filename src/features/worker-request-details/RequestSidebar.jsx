import { Button } from "@/components/button";
import { Card } from "@/components/card";
import ProjectLocationCard from "./ProjectLocationCard";
import ProjectPhotosCard from "./ProjectPhotosCard";

export default function RequestSidebar({ request }) {
  return (
    <div className="space-y-6">
      <ProjectLocationCard request={request} />

      <ProjectPhotosCard request={request} />

      <Card>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-xl font-bold text-[#1A362D]">
              Respond to Request
            </h2>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Review the request carefully before responding. Once accepted,
              this request will move to your active jobs dashboard.
            </p>
          </div>

          {/* Estimated Price */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Estimated Price (Optional)
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-gray-500">
                ETB
              </span>

              <input
                type="number"
                placeholder="Enter your estimate"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-14 pr-4 transition focus:border-[#1A362D] focus:bg-white focus:outline-none"
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Leave empty if you would rather inspect the project before giving
              a quote.
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Message to Customer (Optional)
            </label>

            <textarea
              rows={5}
              placeholder="Introduce yourself, ask questions, explain your availability, or provide additional information..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 transition focus:border-[#1A362D] focus:bg-white focus:outline-none"
            />

            <p className="mt-2 text-xs text-gray-500">
              A clear, friendly message helps customers feel confident choosing
              you.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <div className="space-y-3">
              <Button
                variant="primary"
                fullWidth
                className="rounded-xl font-semibold shadow-sm"
              >
                Accept Request
              </Button>

              <Button
                variant="secondary"
                fullWidth
                className="rounded-xl font-semibold"
              >
                Send Counter Offer
              </Button>

              <Button
                variant="ghost"
                fullWidth
                className="rounded-xl border border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                Decline Request
              </Button>
            </div>
          </div>

          {/* Reminder */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>

              <div>
                <h3 className="font-semibold text-amber-900">
                  Before You Accept
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-amber-800">
                  Accept requests only if you are confident you can complete the
                  work. Your response time, completion rate, and customer
                  reviews all contribute to your overall worker rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
