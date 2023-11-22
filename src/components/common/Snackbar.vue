<template>
  <v-snackbar
    class="snackbar"
    v-model="show"
    :color="color"
    :timeout="timeout"
    :top="top"
    :right="right"
    :bottom="bottom"
    :left="left"
  >
    {{ message }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSnackbarStore } from "@/store/snackbar"; // Adjust the path based on your project structure

// Use the Snackbar store
const snackbarStore = useSnackbarStore();

// Computed properties to reactively update the component based on store's state
const show = computed(() => snackbarStore.show);
const message = computed(() => snackbarStore.message);
const color = computed(() => snackbarStore.color);

// Default props for snackbar positioning
const timeout = 3000;
const top = false;
const right = false;
const bottom = true; // Typically snackbars are shown at the bottom
const left = false;
</script>
<style lang="scss" scoped>
.snackbar {
  z-index: 100;
}
</style>
