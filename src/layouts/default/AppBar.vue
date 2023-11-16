<template>
  <v-app-bar flat class="bg-white elevation-3 app-bar">
    <!-- Clickable logo -->
    <v-img
      height="70%"
      width="70%"
      max-width="100px"
      max-height="100px"
      src="@/assets/image/logo.svg"
    />

    <!-- Navigation Links -->
    <v-toolbar-items>
      <v-btn variant="plain" exact class="text-capitalize toolbar-link" to="/"
        >Ana sayfa</v-btn
      >
      <v-btn
        variant="plain"
        exact
        class="text-capitalize toolbar-link"
        to="/plans"
        >Paketler</v-btn
      >
      <v-btn
        variant="plain"
        exact
        class="text-capitalize toolbar-link"
        to="/help"
        >Yardım</v-btn
      >
    </v-toolbar-items>

    <!-- Spacer to push logout button to the right -->
    <v-spacer></v-spacer>

    <!-- Logout Button -->
    <v-btn
      class="text-capitalize text-primary font-weight-regular"
      variant="text"
      >Çıkış Yap</v-btn
    >
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
.app-bar {
  height: 64px;
  z-index: 2 !important;
  .toolbar-link {
    font-weight: 700;

    &.v-btn.v-btn--active {
      position: relative;
      font-weight: 900;
      opacity: 0.9;
      &::before {
        position: absolute;
        content: "";
        width: 60%;
        height: 4px;
        bottom: 0px;
        left: 0;
        right: 0;
        margin: auto;
        background-color: $secondary;
        border-radius: 10px;
      }
    }
  }
}
</style>
