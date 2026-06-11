import Image from "next/image";

export default function WorkerPortfolio({ portfolio }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Portfolio</h2>

        <button className="font-medium text-[#1A362D] transition hover:opacity-80">
          →
        </button>
      </div>

      {/* Images */}

      <div className="grid grid-cols-2 gap-3">
        {portfolio.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"
          >
            <Image
              src={image}
              alt={`Portfolio ${index + 1}`}
              fill
              className="object-cover transition hover:scale-105"
            />
          </div>
        ))}

        {/* More */}

        <div className="flex aspect-square items-center justify-center rounded-xl bg-[#1A362D] text-center text-white transition hover:opacity-90">
          <div>
            <div className="text-2xl font-bold">+12</div>

            <div className="text-sm opacity-90">MORE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
