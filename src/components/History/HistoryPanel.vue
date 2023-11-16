<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4 class="text-uppercase text-light-accent">Son Aratılanlar</h4>
      </v-col>
      <v-col cols="12" v-for="index in 9" :key="index">
        <history-item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import HistoryItem from "./HistoryItem.vue";
</script>

<style scoped></style>
