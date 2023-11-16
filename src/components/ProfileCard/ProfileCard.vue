<template>
  <div class="card-wrapper">
    <v-card class="w-100 elevation-2 px-12">
      <v-avatar class="mb-4 avatar" size="60px"> </v-avatar>
      <div class="">
        <h5>User Handle</h5>
      </div>

      <div class="mb-4">
        <h3>User Name</h3>
      </div>

      <v-chip
        class="mb-4 w-50 d-flex justify-center"
        color="light-accent"
        variant="outlined"
      >
        <h6 class="text-center">Açık Profil</h6>
      </v-chip>

      <v-row class="mt-3">
        <v-col cols="4" v-for="info in userInfo" :key="info.title">
          <h5 class="text-center text-no-wrap info-title">{{ info.title }}</h5>
          <h2 class="text-no-wrap text-center">{{ info.value }}</h2>
        </v-col>
      </v-row>

      <v-btn class="w-100 mt-3" color="primary">
        <h5 class="text-capitalize">Hesabı Görüntüle</h5>
      </v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userInfo = ref([
  { title: "Takipçiler", value: "661 M" },
  { title: "Gönderiler", value: "7525" },
  { title: "Takip Edilenler", value: "81" },
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
    background-color: white;
    padding: 22px 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    .info-title {
      opacity: 0.5;
    }
    .avatar {
      padding: 3px;
      border: 2pt solid $primary;
    }
  }
}
</style>
