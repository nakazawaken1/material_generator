<template>
  <ul class="SearchedImage">
    <li v-for="item of items" :key="item.nth" @click="(detail = example)">
      <img src="~assets/fox.jpg" />
      <label>{{ item.name }}</label>
    </li>
  </ul>
  <Detail :isOpen="(detail != null)" @update:isOpen="detail = null" :item="detail" />
</template>

<script lang="ts" setup>
import { Item, example } from "~~/composables/models/Item"
const detail = ref<Item | null>(null)
const items = Array.from(Array(10)).map((_, i) => (
  { nth: i + 1, image: 'fox.jpg', name: "FOX : Modacrylic" }
))
</script>

<style lang="scss" scoped>
ul.SearchedImage {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  >li {
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

    >img {
      width: 18.5rem;
    }

    >label {
      border-top: 1px solid #818181;
    }
  }
}
</style>