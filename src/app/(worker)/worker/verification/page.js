import { Button } from "@/components/button";
import { VerificationNotice } from "@/features/worker-verification/VerificationNotice";
import { UploadGuidelines } from "@/features/worker-verification/UploadGuidelines";
import { GovernmentIdUpload } from "@/features/worker-verification/GovernmentIdUpload";
import { CertificateUpload } from "@/features/worker-verification/CertificateUpload";

export default function VerificationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1A362D]">
          Verify Your Account
        </h1>

        <p className="mt-2 max-w-3xl text-gray-500">
          Upload your identification and professional certificate to become a
          verified worker. Verification helps customers trust your profile and
          increases your visibility across the platform.
        </p>
      </div>

      <VerificationNotice />

      <UploadGuidelines />

      <GovernmentIdUpload />

      <CertificateUpload />

      {/* Footer */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="font-semibold text-gray-900">Ready to submit?</h3>

            <p className="mt-1 text-sm text-gray-500">
              Please make sure both documents are uploaded and clearly visible.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary">Cancel</Button>

            <Button variant="primary">Submit Verification</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
