<template>
  <v-app>
    <default-bar @toggle-history="toggleHistory" v-if="!isLogin" />
    <v-row class="h-100 pa-0 ma-0">
      <v-col
        :lg="isLogin ? 12 : isHistoryBarVisible ? 12 : 10"
        md="8"
        sm="8"
        class="content-wrapper bg-surface d-flex flex-column"
      >
        <default-view @show-snackbar="showSnackbar" />
      </v-col>
      <v-col
        v-if="!isLogin"
        :class="{ 'history-panel-wrapper': true, hidden: isHistoryBarVisible }"
        lg="2"
        md="4"
        sm="4"
      >
        <history-panel />
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts" setup>
import HistoryPanel from "@/components/History/HistoryPanel.vue";
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const isHistoryBarVisible = ref(false); // Reactive property to toggle sidebar
const route = useRoute();
const isLogin = computed(() => route.path === "/login");

const toggleHistory = () => {
  isHistoryBarVisible.value = !isHistoryBarVisible.value;
};
const display = useDisplay();
watchEffect(() => {
  if (!display.mdAndUp) isHistoryBarVisible.value = true;
});
const showSnackbar = (message: string) => {
  console.log(message);
};
</script>
<style lang="scss" scoped>
.content-wrapper {
  min-height: 100% !important;
  gap: 50px;
  padding: 0;
}
.history-panel-wrapper {
  position: fixed;
  top: 65px;
  height: 100%;
  transition: right 0.3s ease; // Smooth transition for the sliding effect
  z-index: 3;
  right: 0; // Slide in

  &.hidden {
    right: -100%;
  }
  @media screen and (max-width: 960px) {
    position: fixed;
    background-color: white;
    border-left: 1pt solid rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
