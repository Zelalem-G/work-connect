import { Card } from "@/components/card";

const items = [
  {
    label: "Total Earnings",
    value: "ETB 42,850",
  },
  {
    label: "Completed Jobs",
    value: "142 Jobs",
  },
  {
    label: "Average Rating",
    value: "4.9 / 5.0",
  },
  {
    label: "Verification Status",
    value: "Verified",
    accent: true,
  },
];

export function PerformanceSummaryCard() {
  return (
    <Card>
      <h2 className="text-xl font-bold text-[#1A362D]">Performance Summary</h2>

      <p className="mt-1 text-sm text-gray-500">
        A quick overview of your performance on WorkConnect.
      </p>

      <div className="mt-6 divide-y divide-gray-100">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
          >
            <span className="text-gray-600">{item.label}</span>

            <span
              className={`font-semibold ${
                item.accent ? "text-emerald-600" : "text-gray-900"
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
