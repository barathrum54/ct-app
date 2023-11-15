<template>
  <div class="card-wrapper">
    <v-card class="pa-5">
      <v-img
        class="mb-4"
        height="100px"
        width="100px"
        src="path_to_logo.jpg"
        alt="logo"
      ></v-img>

      <v-chip class="mb-4">User Handle</v-chip>

      <div class="mb-2">
        <h3>User Name</h3>
      </div>

      <v-row>
        <v-col cols="4" v-for="info in userInfo" :key="info.title">
          <h6>{{ info.title }}</h6>
          <h2>{{ info.value }}</h2>
        </v-col>
      </v-row>

      <v-btn color="primary">Hesabı Görüntüle</v-btn>
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
.card-wrapper {
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  max-width: 600px; // Adjust the width as needed
}
</style>
