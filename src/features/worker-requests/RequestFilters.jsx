"use client";

import { useState } from "react";

const filters = [
  "All",
  "Pending",
  "Accepted",
  "In Progress",
  "Completed",
  "Declined",
];

export default function RequestFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
            activeFilter === filter
              ? "border-[#1A362D] bg-[#1A362D] text-white shadow-sm"
              : "border-gray-200 bg-white text-gray-600 hover:border-[#1A362D] hover:text-[#1A362D]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
