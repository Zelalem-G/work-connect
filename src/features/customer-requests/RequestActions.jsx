import { Card } from "@/components/card";

export default function RequestActions({ status }) {
  return (
    <Card>
      <h3 className="text-lg font-bold text-[#1A362D]">Quick Actions</h3>

      <div className="mt-5 space-y-3">
        {(status === "PENDING" || status === "ACCEPTED") && (
          <button className="w-full rounded-xl bg-red-50 py-3 font-semibold text-red-700 transition hover:bg-red-100">
            Cancel Request
          </button>
        )}

        {(status === "ACCEPTED" || status === "IN PROGRESS") && (
          <button className="w-full rounded-xl bg-[#E8F5F1] py-3 font-semibold text-[#1A362D] transition hover:opacity-90">
            Contact Worker
          </button>
        )}

        {status === "COMPLETED" && (
          <>
            <button className="w-full rounded-xl bg-[#E8F5F1] py-3 font-semibold text-[#1A362D] transition hover:opacity-90">
              Leave Review
            </button>

            <button className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
              Hire Again
            </button>
          </>
        )}

        {status === "CANCELLED" && (
          <button className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
            Find Similar Workers
          </button>
        )}
      </div>

      <div className="mt-6 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Need help?</p>

        <p className="mt-1 text-sm text-gray-500">
          Contact WorkConnect support if you have questions about this request.
        </p>
      </div>
    </Card>
  );
}
