import { PortfolioHeader } from "@/features/worker-portfolio/PortfolioHeader";
import { UploadPortfolioCard } from "@/features/worker-portfolio/UploadPortfolioCard";
import { PortfolioGrid } from "@/features/worker-portfolio/PortfolioGrid";

export default function WorkerPortfolioPage() {
  // Temporary mock data
  const portfolioImages = [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
  ];

  return (
    <div className="space-y-8">
      <PortfolioHeader />

      <UploadPortfolioCard />

      <PortfolioGrid images={portfolioImages} />
    </div>
  );
}
