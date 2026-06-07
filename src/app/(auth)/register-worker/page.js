"use client";

import { useState } from "react";
import Link from "next/link";
import StepOne from "@/features/auth/worker-registration/StepOne";
import StepTwo from "@/features/auth/worker-registration/StepOne";
import StepThree from "@/features/auth/worker-registration/StepOne";
import StepFour from "@/features/auth/worker-registration/StepOne";

export default function RegisterWorkerPage() {
  const [step, setStep] = useState(1);

  function nextStep() {
    if (step < 4) {
      setStep(step + 1);
    }
  }

  function prevStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        {/* Progress */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Worker Registration</h1>

          <p className="mt-2 text-gray-500">Step {step} of 4</p>

          <div className="mt-4 flex gap-2">
            {[1, 2, 3, 4].map((number) => (
              <div
                key={number}
                className={`h-2 flex-1 rounded ${
                  number <= step ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}

        <div className="min-h-[250px]">
          {step === 1 && <StepOne />}

          {step === 2 && <StepTwo />}

          {step === 3 && <StepThree />}

          {step === 4 && <StepFour />}
        </div>

        {/* Navigation */}

        {step !== 4 && (
          <div className="mt-8 flex justify-between">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="rounded-lg border px-5 py-2 disabled:opacity-50"
            >
              Back
            </button>

            <button
              onClick={nextStep}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              {step === 3 ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
