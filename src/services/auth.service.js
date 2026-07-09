import { getDatabase, saveDatabase } from "@/mock/initialize";

/**
 * Simulates network latency.
 */
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const CURRENT_USER_KEY = "workconnect-current-user";

/**
 * Logs a user in.
 */
export const login = async (email, password) => {
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

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  return user;
};

/**
 * Logs the current user out.
 */
export const logout = async () => {
  await delay();

  localStorage.removeItem(CURRENT_USER_KEY);
};

/**
 * Registers a new customer.
 */
export const registerCustomer = async (data) => {
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

    firstName: data.firstName,
    lastName: data.lastName,

    email: data.email,
    password: data.password,

    phone: data.phone,
    city: data.city,

    profileImage: "",

    createdAt: new Date().toISOString(),
  };

  database.users.push(newUser);

  saveDatabase(database);

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return newUser;
};

/**
 * Registers a new worker.
 */
export const registerWorker = async (data) => {
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
    role: "worker",

    firstName: data.firstName,
    lastName: data.lastName,

    email: data.email,
    password: data.password,

    phone: data.phone,
    city: data.city,

    profileImage: "",

    createdAt: new Date().toISOString(),
  };

  database.users.push(newUser);

  saveDatabase(database);

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return newUser;
};

/**
 * Simulates a forgot password request.
 */
export const forgotPassword = async (email) => {
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
};

/**
 * Returns the currently logged-in user.
 */
export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  return user ? JSON.parse(user) : null;
};

/**
 * Returns whether a user is authenticated.
 */
export const isAuthenticated = () => {
  return !!getCurrentUser();
};
