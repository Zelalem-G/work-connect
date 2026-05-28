import { TopNav } from "@/components/top-nav";
import { Avatar } from "@/components/avatar";

export default function WorkerLayout({ children }) {
  const workerLinks = [
    { name: "Find Work", href: "/jobs", active: false },
    { name: "Dashboard", href: "/dashboard/worker", active: true },
    { name: "Messages", href: "/messages", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <TopNav
        links={workerLinks}
        rightActions={
          <>
            {/* Worker layout only shows the Avatar on the right in the design */}
            <Avatar
              src="/api/placeholder/150/150"
              alt="Worker Profile"
              size="md"
            />
          </>
        }
      />

      {/* Main Content Wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
