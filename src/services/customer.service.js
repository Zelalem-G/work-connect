import { delay } from "@/lib/delay";

import { getCurrentUser } from "./auth.service";

import { findOne, updateOne, findMany } from "./storage.service";

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
 * Returns a customer by id.
 */
export async function getCustomerById(customerId) {
  await delay();

  return findOne("users", (user) => {
    return user.id === customerId && user.role === "customer";
  });
}

/**
 * Updates a customer profile.
 */
export async function updateCustomer(customerId, updates) {
  await delay();

  const updatedCustomer = updateOne(
    "users",
    (user) => user.id === customerId && user.role === "customer",
    updates,
  );

  // Keep current logged in user synchronized
  const currentUser = getCurrentUser();

  if (currentUser?.id === customerId) {
    localStorage.setItem(
      "workconnect-current-user",
      JSON.stringify(updatedCustomer),
    );
  }

  return updatedCustomer;
}

/**
 * Returns every request created by a customer.
 */
export async function getCustomerRequests(customerId) {
  await delay();

  const requests = findMany(
    "requests",
    (request) => request.customerId === customerId,
  );

  return requests.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

/**
 * Returns a single customer request.
 */
export async function getCustomerRequest(customerId, requestId) {
  await delay();

  return findOne(
    "requests",
    (request) => request.id === requestId && request.customerId === customerId,
  );
}

/**
 * Returns all data required for the customer dashboard.
 */
export async function getCustomerDashboardData() {
  await delay();

  const customer = await getCurrentCustomer();

  if (!customer) {
    return null;
  }

  const requests = await getCustomerRequests(customer.id);

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
    customer,

    stats,

    recentRequests: requests.slice(0, 5),
  };
}
