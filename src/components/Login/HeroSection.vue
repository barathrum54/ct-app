<template>
  <div class="info-banner bg-primary d-flex align-center flex-column h-screen pt-16">
    <h1 class="font-weight-black hero-title">Son Aratılan Hesaplar</h1>
    <Carousel />
    <h3>{{ randomMinute }} dakika önce görüntülendi.</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Carousel from '../Login/Carousel.vue';
import { onMounted } from 'vue';
const randomMinute = ref(Math.floor(Math.random() * 60));

const setRandomMinute = () => {
  setInterval(() => {
    randomMinute.value = Math.floor(Math.random() * 60);
  }, 5000);
};
onMounted(setRandomMinute);
</script>

<style lang="scss" scoped>
.info-banner {
  text-align: center;
  position: relative;
  gap: 30px;

  .hero-title {
    margin-top: 100px;
    font-size: 2.5rem;
    padding-bottom: 50px;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: rgba($color: #fff, $alpha: 0.3);
    z-index: 2;
    width: 30%;
    height: 10%;
    border-radius: 0 0 50px 0;
    border: 1pt solid rgba($color: #fff, $alpha: 0.4);
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: rgba($color: #fff, $alpha: 0.3);
    z-index: 2;
    width: 30%;
    height: 10%;
    border-radius: 50px 0 0 0;
    border: 1pt solid rgba($color: #fff, $alpha: 0.4);
    bottom: 0;
    right: 0;
  }
}
</style>