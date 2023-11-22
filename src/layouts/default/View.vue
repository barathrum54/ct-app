<template>
  <v-main style="min-height: 100vh">
    <overlay />
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
import Overlay from "@/components/common/Overlay.vue";
</script>
