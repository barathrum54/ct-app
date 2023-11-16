<template>
  <div class="profile-card-section-wrapper">
    <div class="profile-card-wrapper" v-for="index in 6" :key="index">
      <ProfileCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
</script>

<style lang="scss" scoped>
.profile-card-section-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
  height: 100%;
  overflow-y: scroll;
  padding-block: 25px;
  padding-inline: 5px;
  .profile-card-wrapper {
    width: calc(33.3% - (75px)); // Adjust the width to account for the gap
    box-sizing: border-box;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
