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
 * Returns one review.
 */
export async function getReviewById(reviewId) {
  await delay();

  return findOne("reviews", (review) => review.id === reviewId);
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
 * Calculates a worker's average rating.
 */
export async function getWorkerRating(workerId) {
  await delay();

  const reviews = await getWorkerReviews(workerId);

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
 * Creates a review.
 */
export async function createReview(data) {
  await delay();

  const customer = getCurrentUser();

  if (!customer || customer.role !== "customer") {
    throw new Error("Only customers can leave reviews.");
  }

  const review = {
    id: crypto.randomUUID(),

    workerId: data.workerId,
    customerId: customer.id,

    rating: data.rating,

    comment: data.comment?.trim() ?? "",

    createdAt: new Date().toISOString(),
  };

  return insertOne("reviews", review);
}

/**
 * Updates a review.
 */
export async function updateReview(reviewId, updates) {
  await delay();

  return updateOne("reviews", (review) => review.id === reviewId, updates);
}

/**
 * Deletes a review.
 */
export async function deleteReview(reviewId) {
  await delay();

  return deleteOne("reviews", (review) => review.id === reviewId);
}
