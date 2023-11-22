// store/snackbar.ts
import { defineStore } from "pinia";

interface SnackbarState {
  show: boolean;
  message: string;
  color: string;
}

export const useSnackbarStore = defineStore({
  id: "snackbar",
  state: (): SnackbarState => ({
    show: false,
    message: "",
    color: "success",
  }),
  actions: {
    showMessage(message: string, color: string = "success") {
      this.show = true;
      this.message = message;
      this.color = color;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
    showError(message: string) {
      this.showMessage(message, "error");
    },
  },
});
