import WorkerProfileHeader from "@/features/workers/WorkerProfileHeader";
import WorkerAbout from "@/features/workers/WorkerAbout";
import WorkerReviews from "@/features/workers/WorkerReviews";

import WorkerBookingCard from "@/features/workers/WorkerBookingCard";
import WorkerPortfolio from "@/features/workers/WorkerPortfolio";
import WorkerServiceArea from "@/features/workers/WorkerServiceArea";

export default function WorkerProfilePage() {
  // Dummy data for now
  const worker = {
    id: 1,

    name: "Abebe Kebede",

    title: "Certified Plumber",

    image: "/api/placeholder/300/300",

    verified: true,

    available: true,

    rating: 4.9,

    reviewCount: 120,

    location: "Addis Ababa, ET",

    price: "100 ETB /hr",

    yearsExperience: "5+",

    completedJobs: 42,

    successRate: "98%",

    activeJobs: 15,

    responseTime: "Usually responds within 2 hours",

    availability: "Available Mon - Fri, 8:00 - 17:00",

    serviceArea: "Addis Ababa",

    workType: "On-Site",

    skills: ["Plumbing", "Pipe Installation", "Maintenance"],

    about: [
      "With over 5 years of hands-on experience as a handyman specializing in plumbing, I take pride in handling a wide range of repair and maintenance tasks for both homes and small businesses. From fixing leaks and unclogging drains to installing fixtures and maintaining water systems, I focus on practical, reliable solutions that get the job done right.",

      "I've worked on over 40 projects, always paying close attention to detail and making sure everything functions smoothly and safely. My goal is to provide honest, dependable service and help my clients feel confident that their plumbing issues are handled with care.",
    ],

    portfolio: [
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
    ],

    reviews: [
      {
        id: 1,
        initials: "MH",
        name: "Martha Haile",
        date: "Last Week",
        project: "Residential Project",
        rating: 5,
        comment: "Great plumber!",
      },

      {
        id: 2,
        initials: "KA",
        name: "Kebede Abebe",
        date: "2 Months Ago",
        project: "Commercial Consultation",
        rating: 5,
        comment: "Highly professional.",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Left Side */}

      <div className="space-y-8 lg:col-span-8">
        <WorkerProfileHeader worker={worker} />

        <WorkerAbout worker={worker} />

        <WorkerReviews reviews={worker.reviews} />
      </div>

      {/* Right Side */}

      <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
        <WorkerBookingCard worker={worker} />

        <WorkerPortfolio portfolio={worker.portfolio} />

        <WorkerServiceArea worker={worker} />
      </aside>
    </div>
  );
}
