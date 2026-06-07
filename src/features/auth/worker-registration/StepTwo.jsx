"use client";

export default function StepTwo() {
  const skills = [
    "Plumbing",
    "Electrical",
    "Carpentry",
    "Painting",
    "Cleaning",
    "Mechanic",
    "Welding",
    "Appliance Repair",
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Skills & Services</h2>

      <p className="mt-2 mb-6 text-gray-500">
        Select the services you provide.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <button
            key={skill}
            type="button"
            className="rounded-lg border border-gray-300 p-4 text-left hover:border-blue-500 hover:bg-blue-50"
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Additional Skill
        </label>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a custom skill"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-5 text-white hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold">Selected Skills</h3>

        <div className="mt-3 rounded-lg border border-dashed border-gray-300 p-4 text-gray-500">
          Selected skills will appear here.
        </div>
      </div>
    </div>
  );
}
