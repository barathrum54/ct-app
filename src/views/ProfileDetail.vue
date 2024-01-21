<template>
  <v-container class="px-lg-16">

    <div class="search-wrapper elevation-2 w-100 mb-5">
      <profile-search-bar :user-handle="userHandle" />
    </div>
    <div class="cards-section">
      <profile-detail-section :profile="{ id: 1, name: 'test' }" />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import ProfileDetailSection from "@/components/Profile/ProfileDetail/ProfileDetailSection.vue";
import ProfileSearchBar from "@/components/common/ProfileSearchBar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();
const userHandle = computed(() => {
  if (!route.params.userHandle) return "";
  return route.params.userHandle as string;
});

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
}
</style>
