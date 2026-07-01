import { StatCard } from "@/components/stat-card";

export default function WorkerStatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Completed Jobs"
        value="142"
        trend="+12 this month"
        icon={
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2A9 9 0 1112 3a9 9 0 019 9z"
            />
          </svg>
        }
      />

      <StatCard
        title="Active Jobs"
        value="2"
        trend="Currently in progress"
        icon={
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17v-6h13v6M3 7h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2"
            />
          </svg>
        }
      />

      <StatCard
        title="Total Earnings"
        value="ETB 42,850"
        variant="primary"
        trend="+ETB 8,400 this month"
        icon={
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        }
      />

      <StatCard
        title="Average Rating"
        value={
          <>
            4.9 <span className="text-lg font-medium text-gray-400">/ 5</span>
          </>
        }
        trend="120 customer reviews"
        icon={
          <svg
            className="h-5 w-5 text-[#B8860B]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        }
      />
    </section>
  );
}
