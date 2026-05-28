"use client"; // Required because of the Switch state

import { useState } from "react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { Switch } from "@/components/switch";
import { ProgressBar } from "@/components/progress-bar";
import { StatCard } from "@/components/stat-card";
import { WorkerRequestCard } from "@/components/worker-request-card";

export default function WorkerDashboard() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="space-y-8">
      {/* 1. Header & Controls */}
      <Card
        noPadding
        className="bg-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-[#1A362D] tracking-tight">
            Welcome, Dawit!
          </h1>
          <p className="text-gray-500 mt-1">
            You have 3 new requests today. Lets get to work.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            variant="accent"
            className="font-bold shadow-md w-full sm:w-auto"
          >
            Verify Account
          </Button>

          <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-xl">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">
                Availability Status
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                Currently receiving new job alerts
              </p>
            </div>
            <Switch checked={isAvailable} onChange={setIsAvailable} />
          </div>
        </div>
      </Card>

      {/* 2. Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Jobs Completed"
          value="142"
          trend="+12% this month"
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <StatCard
          title="Total Earnings"
          value="ETB 42,850"
          variant="primary"
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
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
        />
        <StatCard
          title="Worker Rating"
          value={
            <>
              4.9{" "}
              <span className="text-lg text-gray-400 font-medium">/ 5.0</span>
            </>
          }
          icon={
            <svg
              className="w-5 h-5 text-[#B8860B]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          }
        />
      </div>

      {/* 3. Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Spans 7 columns) */}
        <div className="lg:col-span-7">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              New Job Requests
            </h2>
            <Badge variant="alert">3 Waiting</Badge>
          </div>

          <div className="space-y-4">
            <WorkerRequestCard
              name="Saba Tekle"
              location="Bole, Addis Ababa"
              avatar="/api/placeholder/100/100"
              price="ETB 1,200"
              priceType="ESTIMATED"
              description="Need a professional deep clean for a 2-bedroom apartment before Friday. All supplies provided."
            />
            <WorkerRequestCard
              name="Henok Alemu"
              location="Kazanchis, Addis Ababa"
              avatar="/api/placeholder/100/100"
              price="ETB 850"
              priceType="FIXED"
              description="Looking for someone to help assemble some IKEA-style furniture and hang 4 mirrors."
            />
          </div>
        </div>

        {/* Right Column (Spans 5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Active Jobs</h2>
            <button className="text-sm font-bold text-[#B8860B] hover:text-[#9a7009]">
              View Schedule
            </button>
          </div>

          {/* Active Jobs List Card */}
          <Card className="p-0">
            <div className="divide-y divide-gray-100">
              {/* Job 1 */}
              <div className="p-6 pb-4">
                <Badge className="mb-3">IN PROGRESS</Badge>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Garden Landscaping
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Ends at 5:30 PM
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="mt-4 flex gap-1 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#1A362D] w-3/4"></div>
                  <div className="bg-gray-100 w-1/4"></div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="p-6 py-4 flex justify-between items-center">
                <div>
                  <Badge variant="pending" className="mb-2">
                    STARTS SOON
                  </Badge>
                  <h4 className="font-bold text-gray-900">
                    Kitchen Faucet Repair
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Tomorrow, 09:00 AM
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <Button
                variant="secondary"
                fullWidth
                className="font-bold bg-white"
              >
                View History
              </Button>
            </div>
          </Card>

          {/* Reliability Score Card */}
          <Card className="bg-gray-50 border-none shadow-none">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-[#B8860B]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V5a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="font-bold text-gray-900">
                Worker Reliability Score
              </h3>
            </div>

            <div className="flex justify-between items-end mb-2">
              <Badge variant="accent" className="bg-[#B8860B] text-white">
                TOP RATED
              </Badge>
              <span className="text-sm font-bold text-gray-900">98%</span>
            </div>

            <ProgressBar progress={98} className="mb-4" />

            <p className="text-xs text-gray-500 leading-relaxed">
              You are in the top 2% of workers in Addis Ababa. Maintain your
              response time to keep your badge.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
