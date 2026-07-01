import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";

export default function WorkerRequestListCard({ request }) {
  const statusVariant = {
    Pending: "pending",
    Accepted: "success",
    Completed: "primary",
    Declined: "danger",
  };

  return (
    <Link href={`/worker/requests/${request.id}`}>
      <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1A362D] hover:shadow-md">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          {/* Left Side */}
          <div className="flex gap-4">
            <Avatar src={request.avatar} alt={request.customer} size="lg" />

            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">{request.customer}</p>

                <h2 className="text-xl font-bold text-gray-900">
                  {request.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span>📍 {request.location}</span>
                <span>🗓️ {request.date}</span>
                <span className="font-semibold text-[#1A362D]">
                  {request.budget}
                </span>
              </div>

              <p className="max-w-2xl text-gray-600 line-clamp-2">
                {request.description}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start justify-between lg:items-end">
            <Badge variant={statusVariant[request.status]}>
              {request.status}
            </Badge>

            <span className="mt-6 font-semibold text-[#1A362D] transition-colors hover:text-[#295548]">
              View Details →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
