import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { ProgressBar } from "@/components/progress-bar";
import { StatCard } from "@/components/stat-card";
import { CustomerRequestCard } from "@/components/customer-request-card";

export default function CustomerDashboard() {
  return (
    <div className="space-y-8">
      {/* 1. Page Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#1A362D] tracking-tight">
            My Service Requests
          </h1>
          <p className="text-gray-500 mt-1">
            Track and manage your ongoing and past service bookings.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="bg-gray-100 rounded-full font-bold"
          >
            All Requests{" "}
            <span className="ml-2 bg-gray-800 text-white rounded-full px-2 py-0.5 text-xs">
              3
            </span>
          </Button>
          <Button variant="primary" className="rounded-full shadow-sm">
            + New Request
          </Button>
        </div>
      </div>

      {/* 2. Main Content Layout (12-col grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Request List (Spans 8 columns) */}
        <div className="lg:col-span-8 space-y-4">
          <CustomerRequestCard
            title="Water Pipe Installation"
            date="Oct 24, 2023"
            time="10:00 AM"
            status="ACCEPTED"
            workerName="Abebe K."
            workerAvatar="/api/placeholder/100/100"
          />
          <CustomerRequestCard
            title="Electrical Repair"
            date="Oct 26, 2023"
            time="02:30 PM"
            status="PENDING"
          />
          <CustomerRequestCard
            title="Kitchen Plumbing"
            date="Oct 18, 2023"
            time="09:00 AM"
            status="COMPLETED"
            rating={5}
            hasReceipt={true}
          />
        </div>

        {/* Right Column: Trust Score & Stats (Spans 4 columns) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Custom Trust Score Card */}
          <Card className="bg-[#1A362D] text-white overflow-hidden relative">
            <h3 className="text-lg font-medium mb-4">Trust Score</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-extrabold">98</span>
              <span className="text-emerald-100 text-lg">/ 100</span>
            </div>

            <div className="mb-4">
              <ProgressBar
                progress={98}
                colorClass="bg-[#B8860B]"
                trackClass="bg-white/20"
              />
            </div>

            <p className="text-sm text-emerald-50 leading-relaxed">
              You are in the Gold Standard tier of customers. Keep it up!
            </p>

            {/* Faint Shield Watermark */}
            <svg
              className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5 pointer-events-none"
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

          {/* Secondary Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              title="SPENT"
              value="$420"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            <StatCard
              title="FAVORITES"
              value="12"
              icon={
                <svg
                  className="w-5 h-5 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
