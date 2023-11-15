<template>
  <v-row class="h-100 pa-0 ma-0">
    <v-col cols="10" class="content-wrapper bg-surface d-flex flex-column">
      <h1 class="text-center w-100 font-weight-regular">
        Gizli Profilleri Aşağıdan Aratabilirsin
      </h1>
      <div class="search-wrapper elevation-3 w-100">
        <input
          placeholder="Kullanıcı adını buraya gir"
          type="text"
          class="search-input"
        />
      </div>
    </v-col>
    <v-col cols="2">Son aratılanlar</v-col>
  </v-row>
</template>

<script lang="ts" setup></script>

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
    padding-block: 5px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5px;
      margin: auto;
      width: 15rem;
      height: 1px;
      background-color: black;
    }
    .search-input {
      width: 30%;
      height: 100%;
      min-height: 50px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 300;
      &:active,
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
