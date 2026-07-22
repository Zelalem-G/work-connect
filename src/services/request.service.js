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
/**
 * Deletes a request.
 */
export async function deleteRequest(requestId) {
  await delay();

  return deleteOne("requests", (request) => request.id === requestId);
}

/**
 * Returns a request together with its related worker.
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

  const worker = await getWorkerById(request.workerId);

  return {
    request,
    worker,
  };
}

/**
 * Worker accepts a request.
 */
export async function acceptRequest(requestId) {
  return updateRequest(requestId, {
    status: "accepted",
  });
}

/**
 * Worker marks a request as completed.
 */
export async function completeRequest(requestId) {
  return updateRequest(requestId, {
    status: "completed",
  });
}

/**
 * Customer cancels a request.
 */
export async function cancelRequest(requestId) {
  return updateRequest(requestId, {
    status: "cancelled",
  });
}
