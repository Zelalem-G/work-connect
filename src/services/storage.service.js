// src/services/storage.service.js

import { users } from "@/mock/data/users";
import { categories } from "@/mock/data/categories";
import { workerProfiles } from "@/mock/data/workerProfiles";
import { requests } from "@/mock/data/requests";
import { portfolio } from "@/mock/data/portfolio";
import { reviews } from "@/mock/data/reviews";

const STORAGE_KEY = "workconnect-db";

const INITIAL_DATABASE = {
  users,
  categories,
  workerProfiles,
  requests,
  portfolio,
  reviews,
};

/**
 * Creates the mock database in localStorage
 * the first time the application runs.
 */
export function initializeDatabase() {
  const existing = localStorage.getItem(STORAGE_KEY);

  if (existing) return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATABASE));
}

/**
 * Returns the entire mock database.
 */
export function getDatabase() {
  initializeDatabase();

  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

/**
 * Replaces the entire database.
 */
export function saveDatabase(database) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(database));
}

/**
 * Returns a collection.
 *
 * Example:
 * getCollection("users")
 * getCollection("requests")
 */
export function getCollection(collectionName) {
  const database = getDatabase();

  return database[collectionName] ?? [];
}

/**
 * Saves a single collection.
 *
 * Example:
 * saveCollection("users", updatedUsers)
 */
export function saveCollection(collectionName, data) {
  const database = getDatabase();

  database[collectionName] = data;

  saveDatabase(database);
}

/**
 * Completely resets the mock database.
 *
 * Useful during development.
 */
export function resetDatabase() {
  localStorage.removeItem(STORAGE_KEY);

  initializeDatabase();
}
