import Link from "next/link";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { ProgressBar } from "@/components/progress-bar";
import { StatCard } from "@/components/stat-card";
import { CustomerRequestCard } from "@/components/customer-request-card";

export default function CustomerDashboard() {
  const requests = [
    {
      id: 1,
      title: "Water Pipe Installation",
      workerName: "Abebe Kebede",
      workerAvatar: "/api/placeholder/100/100",
      date: "Jun 14, 2026",
      time: "10:00 AM",
      status: "ACCEPTED",
    },
    {
      id: 2,
      title: "Electrical Repair",
      workerName: "Samuel Tesfaye",
      workerAvatar: "/api/placeholder/100/100",
      date: "Jun 18, 2026",
      time: "02:30 PM",
      status: "PENDING",
    },
    {
      id: 3,
      title: "Kitchen Plumbing",
      workerName: "Mulugeta Desta",
      workerAvatar: "/api/placeholder/100/100",
      date: "Jun 08, 2026",
      time: "09:00 AM",
      status: "COMPLETED",
      rating: 5,
      hasReceipt: true,
    },
    {
      id: 4,
      title: "House Painting",
      workerName: "Bereket Alemu",
      workerAvatar: "/api/placeholder/100/100",
      date: "Jun 20, 2026",
      time: "01:00 PM",
      status: "IN PROGRESS",
    },
  ];

  return (
    <div className="space-y-8 ">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1A362D]">
            Customer Dashboard
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your service requests and track ongoing work.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="rounded-full bg-gray-100 font-bold"
          >
            Active Requests
            <span className="ml-2 rounded-full bg-gray-800 px-2 py-0.5 text-xs text-white">
              4
            </span>
          </Button>

          <Link href="/customer/workers">
            <Button variant="primary" className="rounded-full shadow-sm">
              + New Request
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Side */}

        <div className="space-y-4 lg:col-span-8">
          {requests.map((request) => (
            <Link
              key={request.id}
              href={`/customer/dashboard/requests/${request.id}`}
            >
              <div className="transition-transform duration-200 hover:scale-[1.01]">
                <CustomerRequestCard
                  title={request.title}
                  workerName={request.workerName}
                  workerAvatar={request.workerAvatar}
                  date={request.date}
                  time={request.time}
                  status={request.status}
                  rating={request.rating}
                  hasReceipt={request.hasReceipt}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Right Side */}

        <div className="space-y-6 lg:col-span-4 ">
          {/* Trust Score */}

          <Card className="relative overflow-hidden bg-[#1A362D] text-gray-600">
            <h3 className="mb-4 text-lg font-medium">Trust Score</h3>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold">98</span>

              <span className="text-lg text-emerald-200">/ 100</span>
            </div>

            <div className="mb-4">
              <ProgressBar
                progress={98}
                colorClass="bg-[#B8860B]"
                trackClass="bg-white/20"
              />
            </div>

            <p className="text-sm leading-relaxed text-emerald-200">
              You are one of our most trusted customers with an excellent
              service history.
            </p>

            <svg
              className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 text-white/5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path
                d="M9 12l2 2 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Card>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4">
            <StatCard
              title="REQUESTS"
              value="18"
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
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9m-5-4h5m0 0v5m0-5L10 14"
                  />
                </svg>
              }
            />

            <StatCard
              title="COMPLETED"
              value="12"
              icon={
                <svg
                  className="h-5 w-5 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />

            <StatCard
              title="PENDING"
              value="3"
              icon={
                <svg
                  className="h-5 w-5 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                </svg>
              }
            />

            <StatCard
              title="FAVORITE"
              value="Plumbing"
              icon={
                <svg
                  className="h-5 w-5 text-[#1A362D]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
            />
          </div>

          {/* Recent Activity */}

          <Card>
            <h3 className="mb-4 text-lg font-bold text-[#1A362D]">
              Recent Activity
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-3">
                <p className="font-medium text-gray-900">
                  Water Pipe Installation accepted
                </p>
                <p className="text-sm text-gray-500">
                  Today • Worker confirmed your request.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-3">
                <p className="font-medium text-gray-900">
                  Electrical Repair pending
                </p>
                <p className="text-sm text-gray-500">
                  Yesterday • Waiting for worker response.
                </p>
              </div>

              <div className="border-l-4 border-[#1A362D] pl-3">
                <p className="font-medium text-gray-900">
                  Kitchen Plumbing completed
                </p>
                <p className="text-sm text-gray-500">
                  Last week • Service successfully completed.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
