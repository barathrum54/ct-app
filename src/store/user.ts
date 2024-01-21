// store/user.ts
import { defineStore } from "pinia";
import { authService } from "../services/auth";

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
  actions: {
    async loginUser(email: string, password: string) {
      this.isLoggedIn = true;
      try {
        const userData = await authService.login(email, password);
        this.isLoggedIn = true;
        // this.userData = { email: email };
        this.userData = { email: userData.email };
        return userData;
      } catch (error: any) {
        if (error.message) throw error.message;
        throw `${error.response.data.message} ${
          error.response.data.data || ""
        }`;
      }
    },
    async logoutUser() {
      console.log("logoutUser");
      try {
        // await authService.logout();
        this.isLoggedIn = false;
        this.userData = null;
      } catch (error: any) {
        throw `${error.response.data.message} ${
          error.response.data.data || ""
        }`;
      }
    },
  },
  persist: {
    enabled: true,
  },
});
