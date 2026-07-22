import { delay } from "@/lib/delay";
import { getDatabase, saveDatabase } from "@/services/storage.service";

const CURRENT_USER_KEY = "workconnect-current-user";

/**
 * Stores the current authenticated user.
 */
export function setCurrentUser(user) {
  if (!user) {
    localStorage.removeItem(CURRENT_USER_KEY);
    return;
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

/**
 * Returns the currently authenticated user.
 */
export function getCurrentUser() {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  return user ? JSON.parse(user) : null;
}

/**
 * Returns whether a user is authenticated.
 */
export function isAuthenticated() {
  return !!getCurrentUser();
}

/**
 * Logs a user in.
 */
export async function login(email, password) {
  await delay();

  const database = getDatabase();

  const user = database.users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password,
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  setCurrentUser(user);

  return user;
}

/**
 * Logs the current user out.
 */
export async function logout() {
  await delay();

  setCurrentUser(null);
}

/**
 * Registers a new customer.
 */
export async function registerCustomer(data) {
  await delay();

  const database = getDatabase();

  const existingUser = database.users.find(
    (user) => user.email.toLowerCase() === data.email.toLowerCase(),
  );

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const newUser = {
    id: crypto.randomUUID(),
    role: "customer",

    fullName: data.fullName,

    email: data.email,
    password: data.password,

    phone: data.phone,
    city: data.city,

    profileImage: "",

    createdAt: new Date().toISOString(),
  };

  database.users.push(newUser);

  saveDatabase(database);

  setCurrentUser(newUser);

  return newUser;
}

/**
 * Registers a new worker.
 */
export async function registerWorker(data) {
  await delay();

  const database = getDatabase();

  const existingUser = database.users.find(
    (user) => user.email.toLowerCase() === data.email.toLowerCase(),
  );

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  // Account information
  const newUser = {
    id: crypto.randomUUID(),
    role: "worker",

    fullName: data.fullName,

    email: data.email,
    password: data.password,

    phone: data.phone,
    city: data.city,

    profileImage: "",

    createdAt: new Date().toISOString(),
  };

  // Professional profile
  const workerProfile = {
    userId: newUser.id,

    primarySkill: data.primarySkill,

    skills: data.skills ?? [],

    bio: data.bio ?? data.about ?? "",

    experience: Number(data.experience),

    availability: "available",

    verified: false,

    completedJobs: 0,

    rating: 0,

    totalReviews: 0,

    serviceAreas: [data.city],

    joinedProfession: new Date().toISOString().split("T")[0],

    responseRate: 100,
  };

  database.users.push(newUser);
  database.workerProfiles.push(workerProfile);

  saveDatabase(database);

  setCurrentUser(newUser);

  return newUser;
}

/**
 * Simulates a forgot password request.
 */
export async function forgotPassword(email) {
  await delay();

  const database = getDatabase();

  const user = database.users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );

  if (!user) {
    throw new Error("No account found with that email.");
  }

  return {
    success: true,
    message: "Password reset email sent successfully.",
  };
}
