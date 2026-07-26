import { delay } from "@/lib/delay";

import { getCurrentUser } from "./auth.service";

import {
  findMany,
  findOne,
  insertOne,
  updateOne,
  deleteOne,
} from "./storage.service";
import { getWorkerById } from "./worker.service";

/**
 * Normalizes a user object so the rest of the app
 * only needs to work with fullName.
 */
function normalizeUser(user) {
  if (!user) {
    return null;
  }

  return {
    ...user,
    fullName:
      user.fullName ||
      [user.firstName, user.lastName].filter(Boolean).join(" ") ||
      user.name ||
      "",
  };
}

/**
 * Returns every request.
 * Mainly used by admin pages.
 */
export async function getRequests() {
  await delay();

  return findMany("requests").sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}

/**
 * Returns a request by id.
 * Mainly used by admin pages.
 */
export async function getRequestById(requestId) {
  await delay();

  return findOne("requests", (request) => request.id === requestId);
}

/**
 * Creates a new customer request.
 */
export async function createRequest(data) {
  await delay();

  const customer = getCurrentUser();

  if (!customer || customer.role !== "customer") {
    throw new Error("Only customers can create requests.");
  }

  const request = {
    id: crypto.randomUUID(),

    customerId: customer.id,
    workerId: data.workerId,

    title: data.title,
    description: data.description,
    location: data.location,

    preferredDate: data.preferredDate ?? data.date?.split("T")[0] ?? null,
    preferredTime: data.preferredTime ?? data.date?.split("T")[1] ?? null,

    budget: data.budget || null,

    photos: data.photos ?? data.images ?? [],
    images: data.images ?? data.photos ?? [],

    status: "pending",

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return insertOne("requests", request);
}

/**
 * Updates request information.
 */
export async function updateRequest(requestId, updates) {
  await delay();

  return updateOne("requests", (request) => request.id === requestId, {
    ...updates,
    updatedAt: new Date().toISOString(),
  });
}

/**
 * Deletes a request.
 */
export async function deleteRequest(requestId) {
  await delay();

  return deleteOne("requests", (request) => request.id === requestId);
}

/**
 * Returns a request together with its assigned worker.
 * Used by customer request details.
 */
export async function getCustomerRequestDetails(requestId) {
  await delay();

  const customer = getCurrentUser();

  if (!customer || customer.role !== "customer") {
    return null;
  }

  const request = findOne(
    "requests",
    (request) => request.id === requestId && request.customerId === customer.id,
  );

  if (!request) {
    return null;
  }

  const worker = normalizeUser(await getWorkerById(request.workerId));

  return {
    request,
    worker,
  };
}

/**
 * Returns a request together with its customer.
 * Used by worker request details.
 */
export async function getWorkerRequestDetails(requestId) {
  await delay();

  const worker = getCurrentUser();

  if (!worker || worker.role !== "worker") {
    return null;
  }

  const request = findOne(
    "requests",
    (request) => request.id === requestId && request.workerId === worker.id,
  );

  if (!request) {
    return null;
  }

  const customer = normalizeUser(
    findOne(
      "users",
      (user) => user.id === request.customerId && user.role === "customer",
    ),
  );

  return {
    request,
    customer,
  };
}

/**
 * Updates the status of a request.
 * Internal helper used by lifecycle actions.
 */
async function updateRequestStatus(requestId, status) {
  return updateRequest(requestId, { status });
}

/**
 * Worker accepts a request.
 */
export async function acceptRequest(requestId) {
  return updateRequestStatus(requestId, "accepted");
}

/**
 * Worker declines a request.
 */
export async function declineRequest(requestId) {
  return updateRequestStatus(requestId, "declined");
}

/**
 * Worker starts working on the request.
 */
export async function startRequest(requestId) {
  return updateRequestStatus(requestId, "in_progress");
}

/**
 * Worker marks the request as completed.
 */
export async function completeRequest(requestId) {
  return updateRequestStatus(requestId, "completed");
}

/**
 * Customer confirms the completed work.
 */
export async function confirmCompletion(requestId) {
  return updateRequestStatus(requestId, "confirmed");
}

/**
 * Customer cancels a request.
 */
export async function cancelRequest(requestId) {
  return updateRequestStatus(requestId, "cancelled");
}
