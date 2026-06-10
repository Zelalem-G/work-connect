"use client";

export default function StepThree({
  formData,
  setFormData,
  errors,
  setErrors,
}) {
  function handleAboutChange(e) {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      about: value,
    }));

    if (errors.about) {
      setErrors((prev) => ({
        ...prev,
        about: "",
      }));
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      profilePicture: file || null,
    }));

    if (errors.profilePicture) {
      setErrors((prev) => ({
        ...prev,
        profilePicture: "",
      }));
    }
  }

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
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          <p className="mt-2 text-sm text-gray-500">
            {formData.profilePicture
              ? `Selected: ${formData.profilePicture.name}`
              : "Upload a professional profile photo."}
          </p>

          {errors.profilePicture && (
            <p className="mt-1 text-sm text-red-500">{errors.profilePicture}</p>
          )}
        </div>

        {/* About Me */}

        <div>
          <label className="mb-2 block text-sm font-medium">About Me</label>

          <textarea
            rows={6}
            value={formData.about}
            onChange={handleAboutChange}
            placeholder="Tell customers about yourself, your experience, and the services you provide."
            className={`w-full rounded-lg border px-4 py-3 outline-none resize-none ${
              errors.about
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />

          <div className="mt-1 flex justify-between">
            <div>
              {errors.about && (
                <p className="text-sm text-red-500">{errors.about}</p>
              )}
            </div>

            <p className="text-sm text-gray-500">
              {formData.about.length} characters
            </p>
          </div>
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
