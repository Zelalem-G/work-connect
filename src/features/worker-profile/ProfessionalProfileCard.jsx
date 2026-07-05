import { Card } from "@/components/card";
import { Button } from "@/components/button";

export function ProfessionalProfileCard() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#1A362D]">
            Professional Profile
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            This information is shown on your public worker profile.
          </p>
        </div>

        <Button variant="secondary">Edit</Button>
      </div>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Primary Skill
          </label>

          <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D] focus:bg-white">
            <option>Electrician</option>
            <option>Plumber</option>
            <option>Carpenter</option>
            <option>Painter</option>
            <option>Mechanic</option>
            <option>Cleaner</option>
            <option>Welder</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Years of Experience
          </label>

          <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D] focus:bg-white">
            <option>5 - 10 years</option>
            <option>Less than 1 year</option>
            <option>1 - 2 years</option>
            <option>3 - 5 years</option>
            <option>10+ years</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            City
          </label>

          <input
            type="text"
            defaultValue="Addis Ababa"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Skills
          </label>

          <div className="flex flex-wrap gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4">
            {[
              "Electrical",
              "Maintenance",
              "Solar",
              "Installation",
              "Repairs",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#E8F5F1] px-3 py-1 text-sm font-medium text-[#1A362D]"
              >
                {skill}
              </span>
            ))}

            <button className="rounded-full border border-dashed border-[#1A362D] px-3 py-1 text-sm font-medium text-[#1A362D] transition hover:bg-[#E8F5F1]">
              + Add Skill
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            About
          </label>

          <textarea
            rows={6}
            defaultValue="Experienced electrician specializing in residential and commercial electrical installation, maintenance, and repair. I take pride in delivering safe, reliable, and high-quality workmanship."
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#1A362D] focus:bg-white"
          />
        </div>
      </div>
    </Card>
  );
}
