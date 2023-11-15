<template>
  <div class="profile-card-section-wrapper">
    <div class="profile-card-wrapper" v-for="index in 3" :key="index">
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
  align-items: flex-start;
  width: 100%;
  gap: 100px;
  height: fit-content;
  overflow-y: scroll;
  padding-block: 25px;
  padding-inline: 5px;
  .profile-card-wrapper {
    width: 33.3%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
