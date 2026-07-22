import { delay } from "@/lib/delay";

import { getCurrentUser, setCurrentUser } from "./auth.service";

import { findMany, findOne, updateOne } from "./storage.service";
import { getWorkerRating } from "./review.service";
import { getPortfolioByWorker } from "./portfolio.service";

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
 * Used by public browsing and customer pages.
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
 * Used by public pages and admin pages.
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
 * Updates the currently logged-in worker.
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
 * Returns every request assigned to the current worker.
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
 * Returns workers with a specific primary skill.
 */
export async function getWorkersByProfession(primarySkill) {
  await delay();

  const workers = await getWorkers();

  return workers.filter((worker) => worker.primarySkill === primarySkill);
}

/**
 * Returns dashboard data for the current worker.
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

    completedRequests: requests.filter(
      (request) => request.status === "completed",
    ).length,
  };

  return {
    worker,
    stats,
    recentRequests: requests.slice(0, 5),
  };
}

/**
 * Returns worker portfolio items.
 */
export async function getWorkerPortfolio(workerId) {
  return getPortfolioByWorker(workerId);
}

/**
 * Returns a richer worker profile payload for customer-facing pages.
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
