<template>
  <v-app>
    <default-bar />
    <v-row class="h-100 pa-0 ma-0" justify="space-between" gx-4>
      <v-col cols="10" class="content-wrapper bg-surface d-flex flex-column">
        <default-view />
      </v-col>
      <v-col class="elevation-3 history-panel-wrapper" cols="2">
        <history-panel />
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts" setup>
import HistoryPanel from "@/components/History/HistoryPanel.vue";
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>
<style lang="scss" scoped>
.content-wrapper {
  min-height: 100% !important;
  gap: 50px;
  padding: 0;
}
.history-panel-wrapper {
  position: fixed;
  z-index: 3;
  top: 65px;
  right: 0;
  height: 100%;
}
</style>
