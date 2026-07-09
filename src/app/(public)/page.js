// "use client";

import Link from "next/link";
import { HeroSearch } from "@/components/hero-search";
import { CategoryCard } from "@/components/category-card";
import { WorkerProfileCard } from "@/components/worker-profile-card";
import { Footer } from "@/components/footer";

export default function WorkerBrowsingPage() {
  // Mock configuration dataset matching structural elements in Figma layout arrays
  const categories = [
    {
      label: "Electrician",
      icon: <span className="text-lg font-bold">⚡</span>,
    },
    { label: "Plumber", icon: <span className="text-lg font-bold">🪠</span> },
    { label: "Mechanic", icon: <span className="text-lg font-bold">🔧</span> },
    { label: "Carpenter", icon: <span className="text-lg font-bold">🪚</span> },
    { label: "Cleaner", icon: <span className="text-lg font-bold">🧹</span> },
    { label: "Painter", icon: <span className="text-lg font-bold">🎨</span> },
  ];

  const featuredWorkers = [
    {
      id: 1,
      name: "Abebe Kebede",
      specialty: "Expert Plumber",
      location: "Bole, Addis Ababa",
      rating: "4.9",
      avatar: "/api/placeholder/100/100",
      coverImage: "/api/placeholder/600/400",
      isVerified: true,
    },
    {
      id: 2,
      name: "Abebe Kebede",
      specialty: "Expert Plumber",
      location: "Bole, Addis Ababa",
      rating: "4.9",
      avatar: "/api/placeholder/100/100",
      coverImage: "/api/placeholder/600/400",
      isVerified: true,
    },
    {
      id: 3,
      name: "Abebe Kebede",
      specialty: "Expert Plumber",
      location: "Bole, Addis Ababa",
      rating: "4.9",
      avatar: "/api/placeholder/100/100",
      coverImage: "/api/placeholder/600/400",
      isVerified: true,
    },
  ];

  return (
    <div className="bg-[#f9f9f9] space-y-12">
      {/* 1. Immersive Hero / Central Search Wrapper */}
      <HeroSearch />

      {/* 2. Curated Services Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-[#B8860B] uppercase block mb-1">
              Curated Services
            </span>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Browse by Category
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm font-bold text-[#B8860B] hover:underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        {/* Responsive Grid Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <CategoryCard key={index} label={cat.label} icon={cat.icon} />
          ))}
        </div>
      </div>

      {/* 3. Top Talent Grid Section */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-extrabold tracking-widest text-[#B8860B] uppercase block mb-1">
            Top Talent
          </span>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Featured Workers Near You
          </h2>
        </div>

        {/* 3-Column Profile Matrix Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorkers.map((worker) => (
            <WorkerProfileCard
              key={worker.id}
              name={worker.name}
              specialty={worker.specialty}
              location={worker.location}
              rating={worker.rating}
              avatar={worker.avatar}
              coverImage={worker.coverImage}
              isVerified={worker.isVerified}
            />
          ))}
        </div>
      </div>

      {/* 4. Full-bleed Interactive Platform Footer wrapper */}
      {/* To bypass standard layout container bounding restrictions for a clean edge-to-edge bleed alignment */}
      <div className="mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem] mb-[-2rem]">
        <Footer />
      </div>
    </div>
  );
}
