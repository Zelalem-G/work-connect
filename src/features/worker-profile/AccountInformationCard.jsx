import { Card } from "@/components/card";
import { Button } from "@/components/button";

export function AccountInformationCard() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#1A362D]">
            Account Information
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Update your personal account details.
          </p>
        </div>

        <Button variant="secondary">Edit</Button>
      </div>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            defaultValue="Abebe Kebede"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            defaultValue="abebe@example.com"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            defaultValue="+251912345678"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Password
          </label>

          <input
            type="password"
            value="************"
            readOnly
            className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500"
          />

          <button className="mt-2 text-sm font-semibold text-[#1A362D] hover:underline">
            Change Password
          </button>
        </div>
      </div>
    </Card>
  );
}
