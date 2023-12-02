<template>
  <div class="card-wrapper">
    <v-card class="w-100 elevation-2 px-12">
      <div @click="handlePostClick" class="post-image">
        <img src="" alt="">
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  userHandle: {
    type: String,
    default: "test"
  },
});
const router = useRouter();

const userInfo = ref([
  { title: "Takipçiler", value: "661 M" },
  { title: "Gönderiler", value: "7525" },
  { title: "Takip Edilenler", value: "81" },
]);

const handlePostClick = () => {
  console.log("post clicked");
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.card-wrapper {
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .v-card {
    width: 300px;
    background-color: white;
    padding: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    .post-image {
      width: 300px;
      height: 420px;
      background-color: #e0e0e0;
      border-radius: 10px;

      img {
        position: absolute;
        left: 0;
        background-color: grey;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
