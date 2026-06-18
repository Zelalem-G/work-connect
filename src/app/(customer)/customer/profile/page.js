import ProfileHeader from "@/features/customer-profile/ProfileHeader";
import PersonalInfoCard from "@/features/customer-profile/PersonalInfoCard";
import SecurityCard from "@/features/customer-profile/SecurityCard";
import AccountStats from "@/features/customer-profile/AccountStats";
import FavoritesCard from "@/features/customer-profile/FavoritesCard";
import DangerZone from "@/features/customer-profile/DangerZone";

export default function CustomerProfilePage() {
  const customer = {
    name: "Zelalem Getahun",
    role: "Customer",
    memberSince: "2026",
    badge: "Gold Member",
    avatar: "/api/placeholder/150/150",

    email: "zelalem@example.com",
    phone: "+251 912 345 678",
    city: "Addis Ababa",
    address: "Bole, Addis Ababa",
  };

  const stats = {
    requests: 18,
    completed: 15,
    favorites: 5,
    memberSince: 2026,
  };

  const favoriteWorkers = [
    {
      id: 1,
      name: "Abebe Kebede",
      profession: "Certified Plumber",
      rating: 4.9,
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Hana Tesfaye",
      profession: "Electrician",
      rating: 4.8,
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Samuel Bekele",
      profession: "Carpenter",
      rating: 4.7,
      avatar: "/api/placeholder/100/100",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}

      <div>
        <h1 className="text-3xl font-extrabold text-[#1A362D] tracking-tight">
          My Profile
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your personal information, account security, and favorite
          workers.
        </p>
      </div>

      {/* Profile Hero */}

      <ProfileHeader customer={customer} />

      {/* Main Content */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left */}

        <div className="lg:col-span-8 space-y-6">
          <PersonalInfoCard customer={customer} />

          <SecurityCard />
        </div>

        {/* Right */}

        <div className="lg:col-span-4 space-y-6">
          <AccountStats stats={stats} />

          <FavoritesCard workers={favoriteWorkers} />

          <DangerZone />
        </div>
      </div>
    </div>
  );
}
