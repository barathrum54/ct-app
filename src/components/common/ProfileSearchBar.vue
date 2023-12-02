<template>
  <input :disabled="userHandle != ''" placeholder="Kullanıcı adını buraya gir" type="text" class="search-input"
    v-model="profileSearchQuery" />
</template>

<script setup lang="ts">
import _ from "lodash"; // Assuming lodash is installed
import { useProfilesStore } from "@/store/profiles"; // Adjust the import path as needed
import { ref, watch } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";

const profilesStore = useProfilesStore();
const profileSearchQuery = ref("");

const props = defineProps({
  userHandle: {
    type: String,
    default: ""
  },
});
const userHandle = computed(() => {
  if (!props.userHandle) return "";
  return props.userHandle;
});
// Debounce the search handler
const debounceSearch = _.debounce((query: string) => {
  profilesStore.searchProfile(query);
}, 500);

// Watch for changes in the search query and debounce the search
watch(profileSearchQuery, (newQuery) => {
  if (props.userHandle) return;
  debounceSearch(newQuery);
});

onMounted(() => {
  profileSearchQuery.value = userHandle.value;
});

</script>

<style lang="scss" scoped>
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
</style>
