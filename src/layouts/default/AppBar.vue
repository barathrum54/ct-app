<template>
  <v-app-bar flat class="bg-white elevation-3 app-bar">
    <v-btn @click="toggleSidebar" variant="plain" class="d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-spacer class="d-md-none"></v-spacer>
    <v-img
      height="70%"
      width="70%"
      max-width="100px"
      max-height="100px"
      src="@/assets/image/logo.svg"
    />

    <!-- Navigation Links -->
    <v-toolbar-items class="d-none d-md-block">
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
    <v-btn @click="emit('toggleHistory')" variant="plain">
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <!-- Logout Button -->
    <v-btn
      class="d-none d-md-block text-capitalize text-primary font-weight-regular"
      variant="text"
      >Çıkış Yap</v-btn
    >
  </v-app-bar>
  <v-navigation-drawer v-model="sidebarOpen" app temporary>
    <v-list>
      <!-- List items for navigation -->
      <v-list-item link to="/">Ana sayfa</v-list-item>
      <v-list-item link to="/plans">Paketler</v-list-item>
      <v-list-item link to="/help">Yardım</v-list-item>
      <v-list-item link to="/logout">Çıkış Yap</v-list-item>
      <!-- Add other navigation items here -->
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["toggleHistory"]);
const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.app-bar {
  height: 64px;
  z-index: 2 !important;
  .toolbar-link {
    font-weight: 700;
    font-size: 1rem;

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
