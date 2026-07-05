import { WorkerProfileHeader } from "@/features/worker-profile/WorkerProfileHeader";
import { AccountInformationCard } from "@/features/worker-profile/AccountInformationCard";
import { ProfessionalProfileCard } from "@/features/worker-profile/ProfessionalProfileCard";
import { PortfolioCard } from "@/features/worker-profile/PortfolioCard";
import { SecurityCard } from "@/features/worker-profile/SecurityCard";
import { DangerZoneCard } from "@/features/worker-profile/DangerZoneCard";

export default function WorkerProfilePage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A362D]">
          Profile & Settings
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your account information and professional profile.
        </p>
      </div>

      {/* Profile Summary */}
      <WorkerProfileHeader />

      {/* Main Information */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AccountInformationCard />
        <ProfessionalProfileCard />
      </div>

      {/* Portfolio */}
      <PortfolioCard />

      {/* Bottom Actions */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <SecurityCard />
        <DangerZoneCard />
      </div>
    </div>
  );
}
