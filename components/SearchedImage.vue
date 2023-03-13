<template>
  <ul class="SearchedImage">
    <li v-for="(item, n) in filterItems(props)" :key="n" @click="detail = item">
      <img :src="item.Imagepath" />
      <label>{{ item.label }}</label>
    </li>
  </ul>
  <Detail
    :item="detail"
    :isOpen="detail != null"
    @update:isOpen="detail = null"
  />
</template>

<script lang="ts" setup>
import { Item, filterItems } from "~~/composables/models/Item";
const props = defineProps<{
  labels?: string[];
  searchWord?: string;
}>();
const detail = ref<Item | null>(null);
</script>

<style lang="scss" scoped>
ul.SearchedImage {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > li {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid #818181;
    justify-content: center;
    cursor: pointer;
    position: relative;

    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffff88;
        opacity: 0.5;
      }
    }

    > img {
      width: 18.5rem;
    }

    > label {
      border-top: 1px solid #818181;
    }
  }
}
</style>