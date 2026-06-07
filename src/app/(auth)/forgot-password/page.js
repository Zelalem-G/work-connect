"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        {/* Header */}

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Forgot Password</h1>

          <p className="mt-2 text-gray-500">
            Enter your email address and we will send you a password reset link.
          </p>
        </div>

        {/* Form */}

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer */}

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Remember your password?</span>{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
