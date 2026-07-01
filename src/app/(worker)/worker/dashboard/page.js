import DashboardHeader from "@/features/worker-dashboard/DashboardHeader";
import WorkerStatsGrid from "@/features/worker-dashboard/WorkerStatsGrid";
import NewRequestsSection from "@/features/worker-dashboard/NewRequestsSection";
import ActiveJobsCard from "@/features/worker-dashboard/ActiveJobsCard";
import ReliabilityCard from "@/features/worker-dashboard/ReliabilityCard";

export default function WorkerDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <DashboardHeader />

      {/* Statistics */}
      <WorkerStatsGrid />

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <NewRequestsSection />
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:col-span-5">
          <ActiveJobsCard />
          <ReliabilityCard />
        </div>
      </div>
    </div>
  );
}
