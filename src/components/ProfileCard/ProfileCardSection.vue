<template>
  <div class="profile-card-section-wrapper">
    <div class="profile-card-wrapper" v-if="loading">
      <v-skeleton-loader style="
          width: 100%;
          border: 1pt solid rgba(0, 0, 0, 0.1);
          padding: 5px 15px;
        " type="card, article"></v-skeleton-loader>
    </div>
    <div v-else class="profile-card-wrapper" v-for="item in profileData" :key="item.id">
      <ProfileCard />
    </div>
    <div v-if="!loading && searchQuery" class="profile-card-wrapper">
      <ProfileCardCta />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ProfileCard from "./ProfileCard.vue";
import ProfileCardCta from "./ProfileCardCta.vue";
import { useProfilesStore } from "@/store/profiles"; // Adjust the import path as needed
import { storeToRefs } from "pinia";

interface ProfileSectionProps {
  searchQuery: string;
}
const props = defineProps<ProfileSectionProps>();
const profilesStore = useProfilesStore();
const { loading } = storeToRefs(profilesStore);
const profileData = computed(() => {
  // Check if there is a search query
  if (props.searchQuery !== "") {
    // Return search results when there's a query
    return profilesStore.searchProfiles;
  } else {
    // Return default profiles when there's no query
    return profilesStore.defaultProfiles;
  }
});
</script>

<style lang="scss" scoped>
.profile-card-section-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-block: 25px;
  overflow-y: scroll;
  grid: auto-flow / repeat(3, 1fr);
  grid-gap: 20px 100px;
  padding-inline: 5px;

  .profile-card-wrapper {
    flex: 1 1 auto;
    max-width: calc(33% - 100px / 2);
    height: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
}
</style>
