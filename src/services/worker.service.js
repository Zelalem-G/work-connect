import { delay } from "@/lib/delay";

import { getCurrentUser, setCurrentUser } from "./auth.service";

import { findMany, findOne, updateOne } from "./storage.service";
import { getWorkerRating } from "./review.service";
import { getPortfolioByWorker } from "./portfolio.service";

function formatRequestDate(request) {
  if (!request?.createdAt) {
    return "Pending";
  }

  const createdAt = new Date(request.createdAt);

  if (Number.isNaN(createdAt.getTime())) {
    return "Pending";
  }

  return createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatRequestStatus(status) {
  switch (status) {
    case "accepted":
      return "Accepted";

    case "in_progress":
      return "In Progress";

    case "completed":
      return "Completed";

    case "confirmed":
      return "Completed";

    case "cancelled":
      return "Cancelled";

    case "declined":
      return "Declined";

    default:
      return "Pending";
  }
}

/**
 * Combines a user and worker profile into one object.
 */
function buildWorker(user, profile) {
  if (!user || !profile) {
    return null;
  }

  return {
    ...user,
    ...profile,
  };
}

/**
 * Returns the currently logged-in worker.
 */
export async function getCurrentWorker() {
  await delay();

  const user = getCurrentUser();

  if (!user || user.role !== "worker") {
    return null;
  }

  const profile = findOne(
    "workerProfiles",
    (profile) => profile.userId === user.id,
  );

  return buildWorker(user, profile);
}

/**
 * Returns every worker.
 */
export async function getWorkers() {
  await delay();

  const users = findMany("users", (user) => user.role === "worker");

  return users
    .map((user) => {
      const profile = findOne(
        "workerProfiles",
        (profile) => profile.userId === user.id,
      );

      return buildWorker(user, profile);
    })
    .filter(Boolean);
}

/**
 * Returns one worker by id.
 */
export async function getWorkerById(workerId) {
  await delay();

  const user = findOne(
    "users",
    (user) => user.id === workerId && user.role === "worker",
  );

  if (!user) {
    return null;
  }

  const profile = findOne(
    "workerProfiles",
    (profile) => profile.userId === workerId,
  );

  return buildWorker(user, profile);
}

/**
 * Updates current worker profile.
 */
export async function updateWorker(updates) {
  await delay();

  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.role !== "worker") {
    return null;
  }

  const userFields = {};
  const profileFields = {};

  const userKeys = ["fullName", "email", "phone", "city", "profileImage"];

  Object.entries(updates).forEach(([key, value]) => {
    if (userKeys.includes(key)) {
      userFields[key] = value;
    } else {
      profileFields[key] = value;
    }
  });

  if (Object.keys(userFields).length) {
    updateOne("users", (user) => user.id === currentUser.id, userFields);
  }

  if (Object.keys(profileFields).length) {
    updateOne(
      "workerProfiles",
      (profile) => profile.userId === currentUser.id,
      profileFields,
    );
  }

  const updatedWorker = await getWorkerById(currentUser.id);

  setCurrentUser({
    id: updatedWorker.id,
    role: updatedWorker.role,
    fullName: updatedWorker.fullName,
    email: updatedWorker.email,
    phone: updatedWorker.phone,
    city: updatedWorker.city,
    profileImage: updatedWorker.profileImage,
    createdAt: updatedWorker.createdAt,
  });

  return updatedWorker;
}

/**
 * Returns every request assigned to current worker.
 */
export async function getWorkerRequests() {
  await delay();

  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.role !== "worker") {
    return [];
  }

  const requests = findMany(
    "requests",
    (request) => request.workerId === currentUser.id,
  );

  return requests.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

/**
 * Returns detailed worker request data.
 * Used by worker request details page.
 */
export async function getWorkerRequestDetails(requestId) {
  await delay();

  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.role !== "worker") {
    return null;
  }

  const request = findOne(
    "requests",
    (request) =>
      request.id === requestId && request.workerId === currentUser.id,
  );

  if (!request) {
    return null;
  }

  const customer = findOne(
    "users",
    (user) => user.id === request.customerId && user.role === "customer",
  );

  return {
    request,
    customer,
  };
}

/**
 * Returns worker request list view data.
 */
export async function getWorkerRequestListData() {
  await delay();

  const worker = await getCurrentWorker();

  if (!worker) {
    return {
      worker: null,
      requests: [],
    };
  }

  const requests = await getWorkerRequests();

  const requestList = requests.map((request) => {
    const customer = findOne(
      "users",
      (user) => user.id === request.customerId && user.role === "customer",
    );

    return {
      id: request.id,

      customer: customer?.fullName || "Customer",

      avatar: customer?.profileImage || "/api/placeholder/150/150",

      title: request.title,

      location: request.location || "Location not specified",

      date: formatRequestDate(request),

      budget: request.budget
        ? `ETB ${Number(request.budget).toLocaleString()}`
        : "Negotiable",

      status: request.status,

      statusLabel: formatRequestStatus(request.status),

      description: request.description || "No description provided.",

      request,
    };
  });

  return {
    worker,
    requests: requestList,
  };
}

/**
 * Searches workers.
 */
export async function searchWorkers(query) {
  await delay();

  const workers = await getWorkers();

  if (!query.trim()) {
    return workers;
  }

  const search = query.toLowerCase();

  return workers.filter((worker) => {
    return (
      worker.fullName?.toLowerCase().includes(search) ||
      worker.primarySkill?.toLowerCase().includes(search) ||
      worker.city?.toLowerCase().includes(search) ||
      worker.skills?.some((skill) => skill.toLowerCase().includes(search))
    );
  });
}

/**
 * Returns workers by profession.
 */
export async function getWorkersByProfession(primarySkill) {
  await delay();

  const workers = await getWorkers();

  return workers.filter((worker) => worker.primarySkill === primarySkill);
}

/**
 * Returns worker dashboard data.
 */
export async function getWorkerDashboardData() {
  await delay();

  const worker = await getCurrentWorker();

  if (!worker) {
    return null;
  }

  const requests = await getWorkerRequests();

  const stats = {
    totalRequests: requests.length,

    pendingRequests: requests.filter((request) => request.status === "pending")
      .length,

    acceptedRequests: requests.filter(
      (request) => request.status === "accepted",
    ).length,

    inProgressRequests: requests.filter(
      (request) => request.status === "in_progress",
    ).length,

    completedRequests: requests.filter(
      (request) =>
        request.status === "completed" || request.status === "confirmed",
    ).length,
  };

  const recentRequests = [...requests]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return {
    worker,
    stats,
    recentRequests,
  };
}
/**
 * Returns worker portfolio.
 */
export async function getWorkerPortfolio(workerId) {
  return getPortfolioByWorker(workerId);
}

/**
 * Returns customer-facing worker profile data.
 */
export async function getWorkerProfileData(workerId) {
  await delay();

  const worker = await getWorkerById(workerId);

  if (!worker) {
    return null;
  }

  const [portfolio, rating] = await Promise.all([
    getWorkerPortfolio(workerId),
    getWorkerRating(workerId),
  ]);

  return {
    worker,
    portfolio,
    rating,
  };
}

/**
 * Returns worker analytics.
 */
export async function getWorkerAnalyticsData() {
  await delay();

  const worker = await getCurrentWorker();

  if (!worker) {
    return null;
  }

  const [requests, portfolio, rating] = await Promise.all([
    getWorkerRequests(),
    getPortfolioByWorker(worker.id),
    getWorkerRating(worker.id),
  ]);

  const completedJobs = requests.filter(
    (request) =>
      request.status === "completed" || request.status === "confirmed",
  );

  const achievements = [
    {
      icon: "🏆",
      title: worker.verified ? "Verified Professional" : "Rising Professional",
      description: worker.verified
        ? "Identity and certificates verified."
        : "Complete verification to unlock more trust.",
    },

    {
      icon: "⭐",
      title: `${completedJobs.length}+ Jobs Completed`,
      description: `Successfully completed ${completedJobs.length} jobs.`,
    },

    {
      icon: "✅",
      title:
        worker.rating >= 4.8 ? "Top Rated Worker" : "Consistently Reliable",
      description:
        worker.rating >= 4.8
          ? "Maintain a rating above 4.8."
          : "Keep delivering excellent service.",
    },

    {
      icon: "📸",
      title: portfolio.length > 0 ? "Portfolio Available" : "Portfolio Pending",
      description:
        portfolio.length > 0
          ? "Customers can view your previous work."
          : "Add portfolio items to build trust.",
    },
  ];

  return {
    worker,

    stats: {
      completedJobs: completedJobs.length,
      averageRating: rating.rating,
      totalReviews: rating.totalReviews,
    },

    achievements,

    summary: {
      verificationStatus: worker.verified ? "Verified" : "Pending Verification",
    },
  };
}
