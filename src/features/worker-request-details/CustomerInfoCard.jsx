import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";

export default function CustomerInfoCard() {
  return (
    <Card className="space-y-6">
      <div className="flex items-start gap-5">
        <Avatar src="/api/placeholder/150/150" alt="Customer" size="lg" />

        <div className="flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1A362D]">Saba Tekle</h2>

              <p className="mt-1 text-gray-500">Customer since March 2023</p>
            </div>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Verified Customer
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              ⭐<span>4.9 Rating</span>
            </div>

            <div className="flex items-center gap-2">
              📍
              <span>Bole, Addis Ababa</span>
            </div>

            <div className="flex items-center gap-2">
              📞
              <span>+251 91 234 5678</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold text-[#1A362D]">18</p>
          <p className="mt-1 text-sm text-gray-500">Completed Requests</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold text-[#1A362D]">96%</p>
          <p className="mt-1 text-sm text-gray-500">Acceptance Rate</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold text-[#1A362D]">2 hrs</p>
          <p className="mt-1 text-sm text-gray-500">Avg. Response Time</p>
        </div>
      </div>
    </Card>
  );
}
