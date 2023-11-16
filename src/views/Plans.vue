<template>
  <v-container class="px-16">
    <div class="bg-surface pt-16 h-100">
      <h1 class="text-center font-weight-regular">
        İhtiyacınıza Göre Av Paketlerinden Birini Seçin
      </h1>
      <v-row class="justify-space-between mt-10 card-wrapper">
        <v-col cols="4">
          <v-card class="plan-card text-center">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 font-weight-regular">
                  Haftalık Av Paketi
                </h3>
              </div>
            </v-card-title>
            <h1 class="font-weight-black text-primary price">99₺</h1>
            <div class="info-section">
              <h5>Sınırsız Talep</h5>
              <h5>Silinen Paylaşımlar</h5>
              <h5>Özel Temsilci</h5>
              <h5>7/24 Destek</h5>
              <h5>Kolayca İptal Et</h5>
            </div>
            <v-card-actions class="d-flex justify-center mt-10 w-100">
              <v-btn
                color="primary"
                variant="elevated"
                class="w-75 text-capitalize"
                ><h5>Abone Ol</h5></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="plan-card favorite text-center">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 font-weight-regular">
                  Aylık Av Paketi
                </h3>
              </div>
            </v-card-title>
            <h1 class="font-weight-black text-primary price">249₺</h1>
            <div class="info-section">
              <h5>Sınırsız Talep</h5>
              <h5>Silinen Paylaşımlar</h5>
              <h5>Özel Temsilci</h5>
              <h5>7/24 Destek</h5>
              <h5>Kolayca İptal Et</h5>
            </div>
            <v-card-actions class="d-flex justify-center mt-10 w-100">
              <v-btn
                color="primary"
                variant="elevated"
                class="w-75 text-capitalize"
                ><h5>Abone Ol</h5></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="plan-card text-center">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 font-weight-regular">
                  3 Aylık Av Paketi
                </h3>
              </div>
            </v-card-title>
            <h1 class="font-weight-black text-primary price">499₺</h1>
            <div class="info-section">
              <h5>Sınırsız Talep</h5>
              <h5>Silinen Paylaşımlar</h5>
              <h5>Özel Temsilci</h5>
              <h5>7/24 Destek</h5>
              <h5>Kolayca İptal Et</h5>
            </div>
            <v-card-actions class="d-flex justify-center mt-10 w-100">
              <v-btn
                color="primary"
                variant="elevated"
                class="w-75 text-capitalize"
                ><h5>Abone Ol</h5></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.card-wrapper {
  display: flex;
  justify-content: space-between;

  .plan-card {
    background-color: white;
    border-radius: 10px;
    padding-block: 50px;
    margin-inline: 30px;
    position: relative;
    overflow: visible;
    &.favorite {
      border: 2pt solid rgba($primary, $alpha: 0.3);
      box-shadow: 1px 0px 25px 0px rgba($primary, $alpha: 0.4);
      -webkit-box-shadow: 1px 0px 25px 0px rgba($primary, $alpha: 0.4);
      -moz-box-shadow: 1px 0px 25px 0px rgba($primary, $alpha: 0.4);
      &::after {
        content: "En Çok Tercih Edilen";

        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        font-weight: 500;

        position: absolute;
        width: fit-content;
        min-height: 30px;

        padding: 5px 25px;
        background-color: $primary;
        top: -15px;
        border-radius: 10px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    .price {
      font-size: 3rem;
      margin-top: 35px;
    }
    .info-section {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
      margin-top: 40px;
      font-weight: 300;
    }
  }
}
</style>
