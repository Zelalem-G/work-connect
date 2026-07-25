"use client";

import { useState } from "react";

import { Card } from "@/components/card";
import { cancelRequest, confirmCompletion } from "@/services/request.service";

export default function RequestActions({
  requestId,
  status,
  onRequestUpdated,
}) {
  const [loading, setLoading] = useState(false);

  async function handleCancel() {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this request?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      await cancelRequest(requestId);

      await onRequestUpdated?.();
    } catch (error) {
      alert(error.message || "Unable to cancel request.");
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirmCompletion() {
    const confirmed = window.confirm(
      "Confirm that this job has been completed?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      await confirmCompletion(requestId);

      await onRequestUpdated?.();
    } catch (error) {
      alert(error.message || "Unable to confirm completion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <h3 className="text-lg font-bold text-[#1A362D]">Quick Actions</h3>

      <div className="mt-5 space-y-3">
        {(status === "PENDING" || status === "ACCEPTED") && (
          <button
            onClick={handleCancel}
            disabled={loading}
            className="w-full rounded-xl bg-red-50 py-3 font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Cancelling..." : "Cancel Request"}
          </button>
        )}

        {(status === "ACCEPTED" || status === "IN PROGRESS") && (
          <button
            disabled
            className="w-full rounded-xl bg-[#E8F5F1] py-3 font-semibold text-[#1A362D] opacity-60"
          >
            Contact Worker
          </button>
        )}

        {status === "COMPLETED" && (
          <>
            <button
              onClick={handleConfirmCompletion}
              disabled={loading}
              className="w-full rounded-xl bg-[#E8F5F1] py-3 font-semibold text-[#1A362D] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Confirming..." : "Confirm Completion"}
            </button>

            <button
              disabled
              className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 opacity-60"
            >
              Leave Review
            </button>
          </>
        )}

        {(status === "CONFIRMED" || status === "CANCELLED") && (
          <button
            disabled
            className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 opacity-60"
          >
            More Actions Coming Soon
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
