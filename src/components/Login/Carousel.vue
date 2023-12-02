<template>
  <div class="carousel-container">
    <div class="carousel-card" v-for="(item, index) in displayedItems" :key="item.title" :class="{
      'center': index === 2,
      'left': index < 2,
      'right': index > 2
    }">
      <div class="card-content ">
        <ProfileCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProfileCard from '../ProfileCard/ProfileCard.vue';

const items = ref([
  { title: 'Item 1', subtitle: 'Subtitle 1' },
  { title: 'Item 2', subtitle: 'Subtitle 2' },
  { title: 'Item 3', subtitle: 'Subtitle 3' },
  { title: 'Item 4', subtitle: 'Subtitle 4' },
  { title: 'Item 5', subtitle: 'Subtitle 5' },
  // Add more items if needed
]);
const activeIndex = ref(2); // The center item index

const updateActiveIndex = () => {
  activeIndex.value = (activeIndex.value + 1) % items.value.length;
};

const displayedItems = computed(() => {
  const len = items.value.length;
  const indices = [-2, -1, 0, 1, 2].map(n => (activeIndex.value + n + len) % len);
  return indices.map(index => items.value[index]);
});

setInterval(updateActiveIndex, 5000);
</script>

<style scoped lang="scss">
.carousel-container {
  display: flex;
  justify-content: center;
  perspective: 1000px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 375px;

  .carousel-card {
    background-color: white;
    flex: 0 0 auto;
    width: 350px;
    margin: 0 15px;
    transition: transform 0.5s ease-in-out;
    backface-visibility: hidden;
    position: absolute;
    transform: translateX(0) scale(0.8);
    transition: all 0.5s ease-in-out;
    border-radius: 15px;


    &.center {
      transform: translateX(0) scale(1);
      z-index: 2;
    }

    &.left,
    &.right {
      z-index: 1;

      &:nth-child(1) {
        opacity: 0;
        transform: translateX(-250%) scale(0.5);
      }

      &:nth-child(2) {
        opacity: .8;
        transform: translateX(-120%) scale(0.8);
      }

      &:nth-child(4) {
        opacity: .8;

        transform: translateX(120%) scale(0.8);
      }

      &:nth-child(5) {
        opacity: 0;
        transform: translateX(250%) scale(0.5);
      }
    }


  }
}
</style>
