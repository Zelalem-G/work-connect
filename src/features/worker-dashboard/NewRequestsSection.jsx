import Link from "next/link";
import { Badge } from "@/components/badge";
import { WorkerRequestCard } from "@/components/worker-request-card";

export default function NewRequestsSection() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            New Service Requests
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Review incoming customer requests.
          </p>
        </div>

        <Badge variant="alert">3 Waiting</Badge>
      </div>

      <div className="space-y-4">
        <WorkerRequestCard
          name="Saba Tekle"
          location="Bole, Addis Ababa"
          avatar="/api/placeholder/100/100"
          price="ETB 1,200"
          priceType="ESTIMATED"
          description="Need a professional deep clean for a 2-bedroom apartment before Friday. Cleaning supplies will be provided."
        />

        <WorkerRequestCard
          name="Henok Alemu"
          location="Kazanchis, Addis Ababa"
          avatar="/api/placeholder/100/100"
          price="ETB 850"
          priceType="FIXED"
          description="Looking for help assembling furniture and mounting four mirrors."
        />

        <WorkerRequestCard
          name="Marta Girma"
          location="CMC, Addis Ababa"
          avatar="/api/placeholder/100/100"
          price="ETB 2,500"
          priceType="NEGOTIABLE"
          description="Bathroom plumbing maintenance and replacement of two leaking pipes."
        />
      </div>

      <div className="mt-6">
        <Link
          href="/worker/requests"
          className="font-semibold text-[#1A362D] hover:underline"
        >
          View all requests →
        </Link>
      </div>
    </section>
  );
}
