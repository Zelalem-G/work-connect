import { Card } from "@/components/card";
import { ProgressBar } from "@/components/progress-bar";
import { Badge } from "@/components/badge";

export default function ReliabilityCard() {
  return (
    <Card className="bg-[#1A362D] text-gray-800 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Worker Reliability</h3>

          <Badge className="bg-[#B8860B] text-white">TOP RATED</Badge>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-5xl font-bold">98%</p>

            <p className="mt-2 text-sm text-emerald-200">
              Customer Satisfaction
            </p>
          </div>
        </div>

        <div className="mt-6">
          <ProgressBar
            progress={98}
            colorClass="bg-[#B8860B]"
            trackClass="bg-white/20"
          />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-emerald-200">
          You are among the highest-rated workers in your area. Continue
          responding quickly and completing jobs on time to maintain your Top
          Rated status.
        </p>
      </div>

      {/* Decorative Background */}

      <svg
        className="absolute -right-8 -bottom-8 h-40 w-40 text-white/5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </Card>
  );
}
