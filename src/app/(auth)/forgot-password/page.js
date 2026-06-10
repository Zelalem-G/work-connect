"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    setError("");

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Forgot Password</h1>

          <p className="mt-2 text-gray-500">
            Enter your email and we will send you a reset link.
          </p>
        </div>

        {sent ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center">
            <h2 className="font-semibold text-green-700">Email Sent!</h2>

            <p className="mt-2 text-sm text-green-600">
              If an account exists with that email, you will receive a password
              reset link.
            </p>

            <Link
              href="/login"
              className="mt-4 inline-block font-semibold text-blue-600 hover:underline"
            >
              Return to Login
            </Link>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full rounded-lg border px-4 py-3 outline-none ${
                    error
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />

                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
              </div>

              <button
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-500">Remember your password?</span>{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
