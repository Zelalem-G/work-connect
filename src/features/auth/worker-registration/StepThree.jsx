"use client";

export default function StepThree() {
  return (
    <div>
      {/* Header */}

      <h2 className="text-2xl font-semibold">Profile Setup</h2>

      <p className="mt-2 mb-6 text-gray-500">
        Help customers learn more about you.
      </p>

      <div className="space-y-6">
        {/* Profile Picture */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Profile Picture
          </label>

          <input
            type="file"
            accept="image/*"
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          <p className="mt-2 text-sm text-gray-500">
            Upload a professional profile photo.
          </p>
        </div>

        {/* About Me */}

        <div>
          <label className="mb-2 block text-sm font-medium">About Me</label>

          <textarea
            rows={6}
            placeholder="Tell customers about yourself, your experience, and the services you provide."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 resize-none"
          />
        </div>

        {/* Info Box */}

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <h3 className="font-semibold text-blue-700">Good to know</h3>

          <p className="mt-2 text-sm text-blue-600">
            You can always update your profile picture, bio, and add portfolio
            items later from your worker dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
