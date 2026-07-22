import { delay } from "@/lib/delay";

import { getCurrentUser, setCurrentUser } from "./auth.service";

import { findMany, findOne, updateOne } from "./storage.service";
import { getWorkerById } from "./worker.service";

/**
 * Returns the currently logged-in customer.
 */
export async function getCurrentCustomer() {
  await delay();

  const user = getCurrentUser();

  if (!user || user.role !== "customer") {
    return null;
  }

  return user;
}

/**
 * Returns any customer by id.
 * Mainly used by admin pages.
 */
export async function getCustomerById(customerId) {
  await delay();

  return findOne(
    "users",
    (user) => user.id === customerId && user.role === "customer",
  );
}

/**
 * Updates the currently logged-in customer.
 */
export async function updateCustomer(updates) {
  await delay();

  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.role !== "customer") {
    return null;
  }

  const updatedCustomer = updateOne(
    "users",
    (user) => user.id === currentUser.id,
    updates,
  );

  if (!updatedCustomer) {
    return null;
  }

  setCurrentUser(updatedCustomer);

  return updatedCustomer;
}

/**
 * Returns every request created by the current customer.
 */
export async function getCustomerRequests() {
  await delay();

  const customer = getCurrentUser();

  if (!customer || customer.role !== "customer") {
    return [];
  }

  const requests = findMany(
    "requests",
    (request) => request.customerId === customer.id,
  );

  return requests.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

/**
 * Returns a single request belonging to the current customer.
 */
export async function getCustomerRequest(requestId) {
  await delay();

  const customer = getCurrentUser();

  if (!customer || customer.role !== "customer") {
    return null;
  }

  return findOne(
    "requests",
    (request) => request.id === requestId && request.customerId === customer.id,
  );
}

/**
 * Returns dashboard data for the current customer.
 */
export async function getCustomerDashboardData() {
  await delay();

  const customer = await getCurrentCustomer();

  if (!customer) {
    return null;
  }

  const requests = await getCustomerRequests();
  const recentRequests = [];

  for (const request of requests.slice(0, 5)) {
    const worker = await getWorkerById(request.workerId);

    recentRequests.push({
      ...request,
      worker,
    });
  }

  const stats = {
    totalRequests: requests.length,

    pendingRequests: requests.filter((request) => request.status === "pending")
      .length,

    activeRequests: requests.filter(
      (request) =>
        request.status === "accepted" || request.status === "in_progress",
    ).length,

    completedRequests: requests.filter(
      (request) => request.status === "completed",
    ).length,
  };

  return {
    customer,
    stats,
    recentRequests,
  };
}

/**
 * Returns the current customer's profile view model.
 */
export async function getCustomerProfileData() {
  await delay();

  const customer = await getCurrentCustomer();

  if (!customer) {
    return null;
  }

  const requests = await getCustomerRequests();
  const favoriteWorkers = await getCustomerFavorites();

  const memberSince = customer.createdAt
    ? new Date(customer.createdAt).getFullYear()
    : new Date().getFullYear();

  return {
    customer: {
      ...customer,
      name: customer.fullName,
      role: "Customer",
      badge: "Gold Member",
      avatar: customer.profileImage || "/api/placeholder/150/150",
      address: customer.address || "Addis Ababa",
      memberSince,
    },
    stats: {
      requests: requests.length,
      completed: requests.filter((request) => request.status === "completed")
        .length,
      favorites: favoriteWorkers.length,
      memberSince,
    },
    favoriteWorkers,
  };
}

/**
 * Returns a shortlist of workers that the customer has worked with.
 */
export async function getCustomerFavorites() {
  await delay();

  const customer = await getCurrentCustomer();

  if (!customer) {
    return [];
  }

  const requests = await getCustomerRequests();
  const workerIds = [...new Set(requests.map((request) => request.workerId))];

  const favorites = [];

  for (const workerId of workerIds.slice(0, 3)) {
    const worker = await getWorkerById(workerId);

    if (worker) {
      favorites.push({
        id: worker.id,
        name: worker.fullName,
        profession: worker.primarySkill || "Skilled Professional",
        rating: worker.rating || 0,
        avatar: worker.profileImage || "/api/placeholder/100/100",
      });
    }
  }

  return favorites;
}
