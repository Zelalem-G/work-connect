export default function WorkerReviews({ reviews }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Client Experiences</h2>

        <button className="font-medium text-[#1A362D] transition hover:opacity-80">
          View All Reviews
        </button>
      </div>

      {/* Reviews */}

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-xl border border-gray-100 p-5 transition hover:shadow-sm"
          >
            {/* Top */}

            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                {/* Avatar */}

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A362D] font-semibold text-white">
                  {review.initials}
                </div>

                {/* Info */}

                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>

                  <p className="text-sm text-gray-500">
                    {review.date} • {review.project}
                  </p>
                </div>
              </div>

              {/* Stars */}

              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Comment */}

            <p className="mt-4 leading-7 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
