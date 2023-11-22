<template>
  <transition name="fade">
    <div class="overlay" v-if="isActive">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useOverlayStore } from "@/store/overlay"; // Adjust the path based on your project structure
import { computed } from "vue";

const overlayStore = useOverlayStore();
const isActive = computed(() => {
  const res = overlayStore.show;
  console.log(res);
  return res;
});
</script>

<style lang="scss" scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba($color: #fff, $alpha: 0.4);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
