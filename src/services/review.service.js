import { delay } from "@/lib/delay";

import { getCurrentUser } from "./auth.service";

import {
  findMany,
  findOne,
  insertOne,
  updateOne,
  deleteOne,
} from "./storage.service";

/**
 * Returns every review.
 */
export async function getReviews() {
  await delay();

  return findMany("reviews").sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}

/**
 * Returns one review by its id.
 */
export async function getReviewById(reviewId) {
  await delay();

  return findOne("reviews", (review) => review.id === reviewId);
}

/**
 * Returns the review associated with a request.
 * Returns null if the request has not been reviewed.
 */
export async function getReviewByRequest(requestId) {
  await delay();

  return findOne("reviews", (review) => review.requestId === requestId) ?? null;
}

/**
 * Returns every review for a worker.
 */
export async function getWorkerReviews(workerId) {
  await delay();

  return findMany("reviews", (review) => review.workerId === workerId).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}

/**
 * Returns every review written by a customer.
 */
export async function getCustomerReviews(customerId) {
  await delay();

  return findMany("reviews", (review) => review.customerId === customerId).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}

/**
 * Returns a worker's average rating and total review count.
 */
export async function getWorkerRatingSummary(workerId) {
  await delay();

  const reviews = findMany("reviews", (review) => review.workerId === workerId);

  if (!reviews.length) {
    return {
      rating: 0,
      totalReviews: 0,
    };
  }

  const average =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return {
    rating: Number(average.toFixed(1)),
    totalReviews: reviews.length,
  };
}

/**
 * Returns whether a request has already been reviewed.
 */
export async function hasCustomerReviewed(requestId) {
  await delay();

  const review = findOne("reviews", (review) => review.requestId === requestId);

  return !!review;
}

/**
 * Creates a new review.
 *
 * Rules:
 * - Only authenticated customers can create reviews.
 * - The request must exist.
 * - The request must belong to the current customer.
 * - The request must be confirmed.
 * - One review per request.
 */
export async function createReview(data) {
  await delay();

  const customer = getCurrentUser();

  if (!customer || customer.role !== "customer") {
    throw new Error("Only customers can leave reviews.");
  }

  const request = findOne(
    "requests",
    (request) => request.id === data.requestId,
  );

  if (!request) {
    throw new Error("Request not found.");
  }

  if (request.customerId !== customer.id) {
    throw new Error("You can only review your own requests.");
  }

  if (request.status !== "confirmed") {
    throw new Error(
      "Reviews can only be submitted after the job has been confirmed.",
    );
  }

  const existingReview = findOne(
    "reviews",
    (review) => review.requestId === data.requestId,
  );

  if (existingReview) {
    throw new Error("This request has already been reviewed.");
  }

  const rating = Number(data.rating);

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5.");
  }

  const trimmedComment = data.comment?.trim();

  const review = {
    id: crypto.randomUUID(),

    requestId: request.id,

    workerId: request.workerId,
    customerId: customer.id,

    rating,

    comment: trimmedComment ? trimmedComment : null,

    createdAt: new Date().toISOString(),
  };

  return insertOne("reviews", review);
}

/**
 * Updates an existing review.
 */
export async function updateReview(reviewId, updates) {
  await delay();

  const review = findOne("reviews", (review) => review.id === reviewId);

  if (!review) {
    throw new Error("Review not found.");
  }

  const payload = {};

  if (updates.rating !== undefined) {
    const rating = Number(updates.rating);

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5.");
    }

    payload.rating = rating;
  }

  if (updates.comment !== undefined) {
    const trimmedComment = updates.comment?.trim();

    payload.comment = trimmedComment ? trimmedComment : null;
  }

  return updateOne("reviews", (review) => review.id === reviewId, payload);
}

/**
 * Deletes a review.
 */
export async function deleteReview(reviewId) {
  await delay();

  return deleteOne("reviews", (review) => review.id === reviewId);
}
