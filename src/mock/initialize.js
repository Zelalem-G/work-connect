import { users } from "./data/users";

const DATABASE_KEY = "workconnect-db";

/**
 * Creates the initial database structure.
 * Later we'll add more collections (workers, requests, etc.)
 */
const createInitialDatabase = () => ({
  users,
});

/**
 * Initializes the mock database on first application load.
 * If the database already exists, nothing happens.
 */
export const initializeDatabase = () => {
  const existingDatabase = localStorage.getItem(DATABASE_KEY);

  if (existingDatabase) return;

  const database = createInitialDatabase();

  localStorage.setItem(DATABASE_KEY, JSON.stringify(database));
};

/**
 * Returns the entire database object.
 */
export const getDatabase = () => {
  const database = localStorage.getItem(DATABASE_KEY);

  if (!database) {
    initializeDatabase();
    return createInitialDatabase();
  }

  return JSON.parse(database);
};

/**
 * Saves the entire database object.
 */
export const saveDatabase = (database) => {
  localStorage.setItem(DATABASE_KEY, JSON.stringify(database));
};

/**
 * Resets the database back to its original seeded state.
 * Useful during development.
 */
export const resetDatabase = () => {
  const database = createInitialDatabase();

  localStorage.setItem(DATABASE_KEY, JSON.stringify(database));
};
