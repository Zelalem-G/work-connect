import { delay } from "@/lib/delay";

import { getCurrentUser, setCurrentUser } from "./auth.service";

import { findMany, findOne, updateOne } from "./storage.service";

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
