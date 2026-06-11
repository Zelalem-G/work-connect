export default function WorkerAbout({ worker }) {
  const metrics = [
    {
      value: worker.yearsExperience,
      label: "YEARS EXP.",
    },

    {
      value: worker.completedJobs,
      label: "COMPLETED",
    },

    {
      value: worker.successRate,
      label: "SUCCESS RATE",
    },

    {
      value: worker.activeJobs,
      label: "ACTIVE JOBS",
    },
  ];

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-xl font-bold text-gray-900">
          About {worker.name.split(" ")[0]}
        </h2>

        <div className="h-px flex-1 bg-gray-200"></div>
      </div>

      {/* About */}

      <div className="space-y-5 text-gray-600 leading-7">
        {worker.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Metrics */}

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl bg-gray-50 p-4 text-center"
          >
            <div className="text-3xl font-bold text-[#1A362D]">
              {metric.value}
            </div>

            <div className="mt-2 text-xs font-semibold tracking-wide text-gray-500">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
