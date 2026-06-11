import Link from "next/link";

export default function WorkerBookingCard({ worker }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Price */}

      <div>
        <p className="text-sm text-gray-500">Starting from</p>

        <h2 className="mt-1 text-3xl font-bold text-[#1A362D]">
          {worker.price}
        </h2>
      </div>

      {/* Button */}

      <Link
        href={`/customer/requests/new/${worker.id}`}
        className="mt-6 block w-full rounded-xl bg-[#E8F5F1] py-3 text-center font-bold text-[#1A362D] transition hover:opacity-90"
      >
        Request Service
      </Link>

      {/* Divider */}

      <div className="my-6 h-px bg-gray-200"></div>

      {/* Availability */}

      <div className="space-y-5">
        {/* Schedule */}

        <div className="flex items-start gap-3">
          <div className="mt-1 text-[#1A362D]">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div>
            <p className="font-medium text-gray-900">Availability</p>

            <p className="text-sm text-gray-500">{worker.availability}</p>
          </div>
        </div>

        {/* Response */}

        <div className="flex items-start gap-3">
          <div className="mt-1 text-[#1A362D]">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <div>
            <p className="font-medium text-gray-900">Response Time</p>

            <p className="text-sm text-gray-500">{worker.responseTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
