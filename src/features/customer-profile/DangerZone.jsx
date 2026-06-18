import { Card } from "@/components/card";

export default function DangerZone() {
  return (
    <Card>
      <div className="space-y-5">
        {/* Header */}

        <div>
          <h2 className="text-xl font-bold text-red-700">Account Actions</h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage your session and account.
          </p>
        </div>

        <div className="h-px bg-gray-100" />

        {/* Logout */}

        <button className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
          Logout
        </button>

        {/* Delete */}

        <button className="w-full rounded-xl border border-red-200 bg-red-50 py-3 font-semibold text-red-700 transition hover:bg-red-100">
          Delete Account
        </button>

        {/* Info */}

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Deleting your account will permanently remove your profile, request
            history, and saved workers.
          </p>
        </div>
      </div>
    </Card>
  );
}
