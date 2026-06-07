export default function StepOne() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Basic Information</h2>

      <p className="mt-2 mb-6 text-gray-500">
        Tell us a little about yourself.
      </p>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Phone Number</label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Password</label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Primary Skill
          </label>

          <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
            <option>Choose a skill</option>
            <option>Plumber</option>
            <option>Electrician</option>
            <option>Carpenter</option>
            <option>Painter</option>
            <option>Mechanic</option>
            <option>Cleaner</option>
            <option>Welder</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Years of Experience
          </label>

          <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
            <option>Select experience</option>
            <option>Less than 1 year</option>
            <option>1 - 2 years</option>
            <option>3 - 5 years</option>
            <option>5 - 10 years</option>
            <option>10+ years</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">City</label>

          <input
            type="text"
            placeholder="Enter your city"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
