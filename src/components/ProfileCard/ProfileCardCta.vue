<template>
  <div class="card-wrapper">
    <v-card class="w-100 elevation-2 px-12">
      <v-img src="../../assets/image/logo.svg" width="75" />
      <h3 class="mt-4 text-white mt-5">Hesabı Bulduk!</h3>
      <h4 class="mt-4 text-white font-weight-regular mt-5">
        Hayaletimizi çalıştırmak için ona biraz ruh gerekiyor. Sınırsız avlanma
        paketlerinden sana uygun olanını seç. Cutegro post avına başlasın ve
        sonuçlarını sana getirsin.
      </h4>
      <v-btn
        variant="elevated"
        color="primary"
        class="mt-10 mb-1 text-capitalize w-100"
        >Paketleri İncele</v-btn
      >
    </v-card>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.card-wrapper {
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2pt solid rgba($primary, $alpha: 0.5);
  box-shadow: 1px 0px 25px 0px rgba($primary, $alpha: 0.7);
  -webkit-box-shadow: 1px 0px 25px 0px rgba($primary, $alpha: 0.7);
  -moz-box-shadow: 1px 0px 25px 0px rgba($primary, $alpha: 0.7);

  .v-card {
    padding: 22px 20px;
    background: url("../../assets/image/profile-card-cta-bg.png");
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    .info-title {
      opacity: 0.5;
    }
    .avatar {
      padding: 3px;
      border: 2pt solid $primary;
    }
  }
}
</style>
