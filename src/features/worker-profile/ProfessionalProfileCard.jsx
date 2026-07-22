import { Card } from "@/components/card";
import { Button } from "@/components/button";

export function ProfessionalProfileCard({ worker }) {
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

          <input
            type="text"
            value={worker.primarySkill}
            readOnly
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Years of Experience
          </label>

          <input
            type="text"
            value={`${worker.experience} years`}
            readOnly
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            City
          </label>

          <input
            type="text"
            value={worker.city}
            readOnly
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Skills
          </label>

          <div className="flex flex-wrap gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4">
            {(worker.skills || []).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#E8F5F1] px-3 py-1 text-sm font-medium text-[#1A362D]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            About
          </label>

          <textarea
            rows={6}
            value={worker.bio}
            readOnly
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none"
          />
        </div>
      </div>
    </Card>
  );
}
