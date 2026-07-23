import { Card } from "@/components/card";

export default function RequestDetailsCard({ request }) {
  const budget = request?.budget
    ? `ETB ${Number(request.budget).toLocaleString()}`
    : "Negotiable";

  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1A362D]">Request Details</h2>

        <p className="mt-2 text-gray-500">
          Review the project information provided by the customer.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Service Category
          </p>

          <p className="mt-2 font-semibold text-gray-900">
            {request?.title ? request.title.split(" ").slice(-1)[0] : "Service"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Service Type
          </p>

          <p className="mt-2 font-semibold text-gray-900">On-site Service</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Preferred Date
          </p>

          <p className="mt-2 font-semibold text-gray-900">
            {request?.preferredDate || "To be confirmed"}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Preferred Time
          </p>

          <p className="mt-2 font-semibold text-gray-900">
            {request?.preferredTime || "Flexible"}
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold text-gray-900">Project Description</h3>

        <p className="mt-4 leading-8 text-gray-600">
          {request?.description || "No description provided."}
        </p>
      </div>

      <div className="grid gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
        <div>
          <p className="text-sm text-gray-500">Submitted</p>

          <p className="mt-1 font-semibold text-gray-900">Today • 8:42 AM</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Budget</p>

          <p className="mt-1 font-semibold text-[#1A362D]">{budget}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Request ID</p>

          <p className="mt-1 font-semibold text-gray-900">
            #{request?.id || "REQ"}
          </p>
        </div>
      </div>
    </Card>
  );
}
