"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Switch } from "@/components/switch";

export default function DashboardHeader() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Worker Dashboard</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#1A362D]">
            Welcome back, Dawit 👋
          </h1>

          <p className="mt-2 max-w-2xl text-gray-600">
            You have{" "}
            <span className="font-semibold text-[#1A362D]">
              3 new job requests
            </span>{" "}
            waiting for your response and{" "}
            <span className="font-semibold">2 active jobs</span> in progress.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            variant="accent"
            className="rounded-xl px-6 font-semibold shadow-sm"
          >
            Verify Account
          </Button>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3">
            <div className="text-right">
              <p className="font-semibold text-gray-900">
                {isAvailable ? "Available" : "Unavailable"}
              </p>

              <p className="text-xs text-gray-500">
                {isAvailable
                  ? "Receiving new requests"
                  : "Hidden from customers"}
              </p>
            </div>

            <Switch checked={isAvailable} onChange={setIsAvailable} />
          </div>
        </div>
      </div>
    </section>
  );
}
