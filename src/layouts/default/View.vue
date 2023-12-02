<template>
  <v-main style="min-height: 100vh">
    <overlay />
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
import Overlay from "@/components/common/Overlay.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.title = import.meta.env.VITE_APP_TITLE;
});
</script>
