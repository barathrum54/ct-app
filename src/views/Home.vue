<template>
  <v-container class="px-lg-16">
    <h1 class="text-center w-100 font-weight-regular my-13">
      Gizli Profilleri Aşağıdan Aratabilirsin
    </h1>
    <div class="search-wrapper elevation-2 w-100 mb-5">
      <profile-search-bar />
    </div>
    <div class="cards-section">
      <profile-card-section />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import ProfileCardSection from "@/components/Profile/ProfileCard/ProfileCardSection.vue";
import ProfileSearchBar from "@/components/common/ProfileSearchBar.vue";

</script>

<style lang="scss" scoped>
.search-wrapper {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  height: fit-content;
  padding-block: 10px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: auto;
    width: 15rem;
    height: 1px;
    background-color: black;
    opacity: 0.3;
  }


}
</style>
