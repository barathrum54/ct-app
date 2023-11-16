<template>
  <v-row class="h-100 pa-0 ma-0" justify="space-between" gx-4>
    <v-col cols="10" class="content-wrapper bg-surface d-flex flex-column">
      <h1 class="text-center w-100 font-weight-regular">
        Gizli Profilleri Aşağıdan Aratabilirsin
      </h1>
      <div class="search-wrapper elevation-2 w-100">
        <input
          placeholder="Kullanıcı adını buraya gir"
          type="text"
          class="search-input"
        />
      </div>
      <div class="cards-section">
        <profile-card-section />
      </div>
    </v-col>
    <v-col class="elevation-3 history-panel-wrapper" cols="2">
      <history-panel />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import HistoryPanel from "@/components/History/HistoryPanel.vue";
import ProfileCardSection from "@/components/ProfileCard/ProfileCardSection.vue";
</script>

<style lang="scss" scoped>
.content-wrapper {
  min-height: 100% !important;
  padding: 5%;
  padding-top: 3%;
  gap: 50px;

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
    .search-input {
      width: 30%;
      height: 100%;
      min-height: 50px;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 300;
      color: rgba($color: #000000, $alpha: 0.5);
      &:active,
      &:focus {
        outline: none;
      }
    }
  }
}
.history-panel-wrapper {
  position: fixed;
  right: 0;
  height: 100%;
}
</style>
