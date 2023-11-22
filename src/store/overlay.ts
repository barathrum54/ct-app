// store/snackbar.ts
import { defineStore } from "pinia";

interface OverlayState {
  show: boolean;
}

export const useOverlayStore = defineStore({
  id: "overlay",
  state: (): OverlayState => ({
    show: false,
  }),
  actions: {
    showOverlay() {
      this.show = true;
    },
    hideOverlay() {
      this.show = false;
    },
  },
});
