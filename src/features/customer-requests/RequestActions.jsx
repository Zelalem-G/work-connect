"use client";

import { useState } from "react";

import { Card } from "@/components/card";
import { cancelRequest, confirmCompletion } from "@/services/request.service";

export default function RequestActions({
  requestId,
  status,
  onRequestUpdated,
}) {
  const [loadingAction, setLoadingAction] = useState(null);

  async function handleCancel() {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this request?",
    );

    if (!confirmed) return;

    try {
      setLoadingAction("cancel");

      await cancelRequest(requestId);

      await onRequestUpdated?.();
    } catch (error) {
      alert(error.message || "Unable to cancel request.");
    } finally {
      setLoadingAction(null);
    }
  }

  async function handleConfirmCompletion() {
    const confirmed = window.confirm(
      "Confirm that this job has been completed?",
    );

    if (!confirmed) return;

    try {
      setLoadingAction("confirm");

      await confirmCompletion(requestId);

      await onRequestUpdated?.();
    } catch (error) {
      alert(error.message || "Unable to confirm completion.");
    } finally {
      setLoadingAction(null);
    }
  }

  return (
    <Card>
      <h3 className="text-lg font-bold text-[#1A362D]">Quick Actions</h3>

      <div className="mt-5 space-y-3">
        {(status === "PENDING" || status === "ACCEPTED") && (
          <button
            type="button"
            onClick={handleCancel}
            disabled={loadingAction !== null}
            className="w-full rounded-xl bg-red-50 py-3 font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loadingAction === "cancel" ? "Cancelling..." : "Cancel Request"}
          </button>
        )}

        {(status === "ACCEPTED" || status === "IN PROGRESS") && (
          <button
            type="button"
            disabled
            className="w-full rounded-xl bg-[#E8F5F1] py-3 font-semibold text-[#1A362D] opacity-60"
          >
            Contact Worker (Coming Soon)
          </button>
        )}

        {status === "COMPLETED" && (
          <>
            <button
              type="button"
              onClick={handleConfirmCompletion}
              disabled={loadingAction !== null}
              className="w-full rounded-xl bg-[#E8F5F1] py-3 font-semibold text-[#1A362D] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingAction === "confirm"
                ? "Confirming..."
                : "Confirm Completion"}
            </button>

            <button
              type="button"
              disabled
              className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 opacity-60"
            >
              Leave Review (Coming Soon)
            </button>
          </>
        )}

        {(status === "CONFIRMED" ||
          status === "DECLINED" ||
          status === "CANCELLED") && (
          <button
            type="button"
            disabled
            className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 opacity-60"
          >
            No Actions Available
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
