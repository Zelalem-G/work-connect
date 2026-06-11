"use client";

import { Avatar } from "@/components/avatar";

const categories = [
  "All",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Mason",
  "Welder",
];

const workers = [
  {
    id: 1,
    name: "Abebe Kebede",
    skill: "Electrician",
    location: "Addis Ababa",
    rating: 4.9,
    verified: true,
  },
  {
    id: 2,
    name: "Samuel Tadesse",
    skill: "Plumber",
    location: "Bahir Dar",
    rating: 4.7,
    verified: true,
  },
  {
    id: 3,
    name: "Henok Alemu",
    skill: "Carpenter",
    location: "Hawassa",
    rating: 4.8,
    verified: false,
  },
  {
    id: 4,
    name: "Mikiyas Desta",
    skill: "Painter",
    location: "Adama",
    rating: 4.6,
    verified: true,
  },
  {
    id: 5,
    name: "Bereket Hailu",
    skill: "Mason",
    location: "Addis Ababa",
    rating: 4.9,
    verified: true,
  },
  {
    id: 6,
    name: "Nathan Solomon",
    skill: "Welder",
    location: "Dire Dawa",
    rating: 4.8,
    verified: false,
  },
];

export default function WorkersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold text-gray-900">
          Find Skilled Workers
        </h1>

        <p className="mt-2 text-gray-500">
          Browse trusted professionals and hire the right person for your
          project.
        </p>
      </section>

      {/* Search */}

      <section>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search workers..."
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition focus:border-[#1A362D]"
          />
        </div>
      </section>

      {/* Categories */}

      <section className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              index === 0
                ? "bg-[#1A362D] text-white"
                : "bg-white text-gray-600 shadow-sm hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Workers */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {workers.map((worker) => (
          <div
            key={worker.id}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* Top */}

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  src="/api/placeholder/150/150"
                  alt={worker.name}
                  size="lg"
                />

                <div>
                  <h2 className="font-semibold text-gray-900">{worker.name}</h2>

                  <p className="text-sm text-gray-500">{worker.skill}</p>
                </div>
              </div>

              {worker.verified && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Verified
                </span>
              )}
            </div>

            {/* Rating */}

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Rating</p>

                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>

                  <span className="font-medium">{worker.rating}</span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Location</p>

                <p className="font-medium text-gray-900">{worker.location}</p>
              </div>
            </div>

            {/* Button */}

            <button className="mt-6 w-full rounded-xl bg-[#1A362D] py-3 font-medium text-white transition hover:opacity-90">
              View Full Profile
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
