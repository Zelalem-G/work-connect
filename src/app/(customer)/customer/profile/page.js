"use client";

import { useEffect, useState } from "react";

import ProfileHeader from "@/features/customer-profile/ProfileHeader";
import PersonalInfoCard from "@/features/customer-profile/PersonalInfoCard";
import SecurityCard from "@/features/customer-profile/SecurityCard";
import AccountStats from "@/features/customer-profile/AccountStats";
import FavoritesCard from "@/features/customer-profile/FavoritesCard";
import DangerZone from "@/features/customer-profile/DangerZone";
import { Card } from "@/components/card";
import { getCustomerProfileData } from "@/services/customer.service";

export default function CustomerProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadProfileData() {
      try {
        setLoading(true);
        setError("");
        const data = await getCustomerProfileData();

        if (mounted) {
          setProfileData(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message || "Unable to load your profile right now.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProfileData();

    return () => {
      mounted = false;
    };
  }, []);

  const customer = profileData?.customer;
  const stats = profileData?.stats;
  const favoriteWorkers = profileData?.favoriteWorkers || [];

  return (
    <div className="space-y-8">
      {/* Page Header */}

      <div>
        <h1 className="text-3xl font-extrabold text-[#1A362D] tracking-tight">
          My Profile
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your personal information, account security, and favorite
          workers.
        </p>
      </div>

      {/* Profile Hero */}

      {loading ? (
        <Card className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
          Loading your profile...
        </Card>
      ) : error ? (
        <Card className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center text-red-600">
          {error}
        </Card>
      ) : customer ? (
        <>
          <ProfileHeader customer={customer} />

          {/* Main Content */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left */}

            <div className="lg:col-span-8 space-y-6">
              <PersonalInfoCard customer={customer} />

              <SecurityCard />
            </div>

            {/* Right */}

            <div className="lg:col-span-4 space-y-6">
              <AccountStats stats={stats} />

              <FavoritesCard workers={favoriteWorkers} />

              <DangerZone />
            </div>
          </div>
        </>
      ) : (
        <Card className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
          No profile information is available yet.
        </Card>
      )}
    </div>
  );
}
