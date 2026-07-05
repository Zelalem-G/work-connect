import { AnalyticsHeader } from "@/features/worker-analytics/AnalyticsHeader";
import { AnalyticsStats } from "@/features/worker-analytics/AnalyticsStats";
import { PerformanceSummaryCard } from "@/features/worker-analytics/PerformanceSummaryCard";
import { AchievementsCard } from "@/features/worker-analytics/AchievementsCard";

export default function WorkerAnalyticsPage() {
  return (
    <div className="space-y-8">
      <AnalyticsHeader />

      <AnalyticsStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <PerformanceSummaryCard />

        <AchievementsCard />
      </div>
    </div>
  );
}
