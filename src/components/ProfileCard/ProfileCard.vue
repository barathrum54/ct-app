<template>
  <div class="card-wrapper">
    <v-card class="w-100 elevation-3">
      <v-avatar class="mb-4 avatar" size="60px"> </v-avatar>

      <v-chip class="mb-4">User Handle</v-chip>

      <div class="mb-2">
        <h3>User Name</h3>
      </div>

      <v-row>
        <v-col cols="4" v-for="info in userInfo" :key="info.title">
          <h4 class="text-center text-light">{{ info.title }}</h4>
          <h2>{{ info.value }}</h2>
        </v-col>
      </v-row>

      <v-btn class="w-100 mt-3" color="primary">Hesabı Görüntüle</v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userInfo = ref([
  { title: "Title 1", value: "Value 1" },
  { title: "Title 2", value: "Value 2" },
  { title: "Title 3", value: "Value 3" },
]);
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.card-wrapper {
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .v-card {
    padding: 22px 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    .avatar {
      padding: 3px;
      border: 2pt solid $primary;
    }
  }
}
</style>
