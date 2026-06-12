import RequestHeader from "@/features/requests/RequestHeader";
import WorkerSummaryCard from "@/features/requests/WorkerSummaryCard";
import RequestForm from "@/features/requests/RequestForm";
import RequestSummary from "@/features/requests/RequestSummary";
import RequestActions from "@/features/requests/RequestActions";

export default function RequestServicePage() {
  // Dummy worker data
  // Later this will come from the backend using workerId

  const worker = {
    id: 1,

    name: "Abebe Kebede",

    title: "Certified Plumber",

    image: "/api/placeholder/150/150",

    rating: 4.9,

    reviewCount: 124,

    badge: "Top Rated",
  };

  // Dummy request preview
  // Later this will come from controlled form state

  const requestPreview = {
    location: "Not specified",
    preferredDate: "Not selected",
    budget: "Flexible",
  };

  return (
    <div className="mx-auto max-w-3xl py-8">
      {/* Header */}

      <RequestHeader worker={worker} />

      {/* Main Form Card */}

      <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Worker Context */}

        <WorkerSummaryCard worker={worker} />

        {/* Form */}

        <div className="mt-8">
          <RequestForm worker={worker} />
        </div>

        {/* Summary */}

        <div className="mt-8">
          <RequestSummary worker={worker} request={requestPreview} />
        </div>

        {/* Actions */}

        <div className="mt-8">
          <RequestActions worker={worker} />
        </div>
      </section>
    </div>
  );
}
