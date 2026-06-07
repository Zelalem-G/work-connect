import Link from "next/link";

export default function StepFour() {
  return (
    <div className="text-center">
      <div className="text-6xl">🎉</div>

      <h2 className="mt-4 text-3xl font-bold">Registration Complete</h2>

      <p className="mt-3 text-gray-500">
        Your worker account has been created. You can complete account
        verification later from your dashboard.
      </p>

      <Link
        href="/login"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Go to Login
      </Link>
    </div>
  );
}
