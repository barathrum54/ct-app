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
    <div v-if="!loading" class="profile-card-wrapper">
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
  justify-content: space-between;
  width: 100%;
  gap: 50px;
  height: 100%;
  overflow-y: scroll;
  padding-block: 25px;
  padding-inline: 5px;

  .profile-card-wrapper {

    min-width: 30%;

    @media screen and (max-width: 640px) {
      width: calc(100%);
    }

    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
