import { create } from "zustand";

import * as authService from "@/services/auth.service";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  initialize: () => {
    const user = authService.getCurrentUser();

    set({
      user,
      isAuthenticated: !!user,
      isLoading: false,
    });
  },

  login: async (email, password) => {
    set({ isLoading: true });

    try {
      const user = await authService.login(email, password);

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });

      return user;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  registerCustomer: async (formData) => {
    set({ isLoading: true });

    try {
      const user = await authService.registerCustomer(formData);

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });

      return user;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  registerWorker: async (formData) => {
    console.log("AUTH STORE: registerWorker called");

    set({ isLoading: true });

    try {
      console.log("AUTH STORE: calling authService.registerWorker");

      const user = await authService.registerWorker(formData);

      console.log("AUTH STORE: authService returned");
      console.log(user);

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });

      console.log("AUTH STORE: state updated");

      return user;
    } catch (error) {
      console.error("AUTH STORE ERROR:", error);

      set({ isLoading: false });

      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true });

    await authService.logout();

    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
}));
