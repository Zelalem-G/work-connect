import Link from "next/link";
import { cn } from "@/lib/utils";

export function TopNav({ links = [], rightActions }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-[#1A362D]">
              WorkConnect
            </Link>
          </div>

          {/* 2. Centered Navigation Links */}
          <nav className="hidden md:flex space-x-8 h-full">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full transition-colors",
                  link.active
                    ? "border-[#1A362D] text-[#1A362D]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. Right Side Actions (Search, Notifications, Avatar) */}
          <div className="flex items-center gap-4">
            {/* Reusable Search Bar Layout */}
            <div className="relative hidden sm:block">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={
                  links[0]?.name === "Hire Talent"
                    ? "Search Talent..."
                    : "Search tasks..."
                }
                className="pl-9 pr-4 py-2 border border-transparent bg-gray-100 rounded-full text-sm focus:bg-white focus:border-gray-300 focus:ring-0 focus:outline-none w-64 transition-all"
              />
            </div>

            {/* Injected Right Actions (Icons + Avatar) */}
            <div className="flex items-center gap-3">{rightActions}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
