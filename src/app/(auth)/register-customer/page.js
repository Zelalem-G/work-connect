"use client";

import { useState } from "react";
import Link from "next/link";

import { customerRegistrationSchema } from "@/validation/auth/customerRegistration";
import { validateSchema } from "@/validation/helpers";

export default function RegisterCustomerPage() {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await validateSchema(customerRegistrationSchema, formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});

    console.log(formData);

    // Backend integration later
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 text-gray-800">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        {/* Header */}

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Create Customer Account</h1>

          <p className="mt-2 text-gray-500">
            Join WorkConnect and connect with trusted workers.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}

          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                errors.fullName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />

            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                errors.phone
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* City */}

          <div>
            <label className="mb-2 block text-sm font-medium">City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                errors.city
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />

            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city}</p>
            )}
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`w-full rounded-lg border px-4 py-3 outline-none ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Already have an account?</span>{" "}
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
