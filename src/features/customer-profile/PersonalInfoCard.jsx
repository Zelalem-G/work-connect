import { Card } from "@/components/card";

export default function PersonalInfoCard({ customer }) {
  return (
    <Card>
      <div className="space-y-6">
        {/* Header */}

        <div>
          <h2 className="text-xl font-bold text-[#1A362D]">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Update your account details.
          </p>
        </div>

        <div className="h-px bg-gray-100" />

        {/* Form */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Name */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              defaultValue={customer.name}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D]"
            />
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              defaultValue={customer.email}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D]"
            />
          </div>

          {/* Phone */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>

            <input
              type="text"
              defaultValue={customer.phone}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D]"
            />
          </div>

          {/* City */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              City
            </label>

            <input
              type="text"
              defaultValue={customer.city}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D]"
            />
          </div>
        </div>

        {/* Address */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Address
          </label>

          <textarea
            rows={4}
            defaultValue={customer.address}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D]"
          />
        </div>

        {/* Save */}

        <div>
          <button className="rounded-xl bg-[#E8F5F1] px-6 py-3 font-semibold text-[#1A362D] transition hover:opacity-90">
            Save Changes
          </button>
        </div>
      </div>
    </Card>
  );
}
