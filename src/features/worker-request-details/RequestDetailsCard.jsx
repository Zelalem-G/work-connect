import { Card } from "@/components/card";

export default function RequestDetailsCard() {
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

          <p className="mt-2 font-semibold text-gray-900">Plumbing</p>
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

          <p className="mt-2 font-semibold text-gray-900">June 28, 2026</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Preferred Time
          </p>

          <p className="mt-2 font-semibold text-gray-900">10:00 AM</p>
        </div>
      </div>

      <div className="rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold text-gray-900">Project Description</h3>

        <p className="mt-4 leading-8 text-gray-600">
          My kitchen sink has been leaking underneath the cabinet for the last
          few days. I believe one of the pipes may have cracked and water is
          slowly dripping whenever the sink is used.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          I would like someone to inspect the plumbing, replace any damaged
          parts if necessary, and ensure there are no additional hidden leaks.
          The work should preferably be completed this week.
        </p>
      </div>

      <div className="grid gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
        <div>
          <p className="text-sm text-gray-500">Submitted</p>

          <p className="mt-1 font-semibold text-gray-900">Today • 8:42 AM</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Budget</p>

          <p className="mt-1 font-semibold text-[#1A362D]">ETB 1,200</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Request ID</p>

          <p className="mt-1 font-semibold text-gray-900">#REQ-20341</p>
        </div>
      </div>
    </Card>
  );
}
