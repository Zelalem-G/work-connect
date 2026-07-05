import { PortfolioImageCard } from "./PortfolioImageCard";
import { EmptyPortfolioState } from "./EmptyPortfolioState";

export function PortfolioGrid({ images = [] }) {
  if (images.length === 0) {
    return <EmptyPortfolioState />;
  }

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-[#1A362D]">My Portfolio</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <PortfolioImageCard key={index} image={image} />
        ))}
      </div>
    </section>
  );
}
