// store/user.ts
import { defineStore } from "pinia";

interface UserState {
  isLoggedIn: boolean;
  userData: {
    email: string;
  } | null;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    isLoggedIn: false,
    userData: null,
  }),
  getters: {},
  actions: {
    loginUser(userData: { email: string }) {
      this.isLoggedIn = true;
      this.userData = userData;
    },
    logoutUser() {
      this.isLoggedIn = false;
      this.userData = null;
    },
  },
});
