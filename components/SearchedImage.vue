<template>
  <ul class="SearchedImage">
    <li v-for="item of items" :key="item.nth" @click="(detail = example), (numberid = item.no)">
      <img :src="imageUrl[item.no]" />
      <label>{{ item.name }}</label>
    </li>
  </ul>
  <Detail :isOpen="detail != null" @update:isOpen="detail = null" :item="detail" :fabricNo="fabricNo"
    :numberid="numberid" />
</template>

<script lang="ts" setup>
import { Item, example } from "~~/composables/models/Item"
const detail = ref<Item | null>(null)
const fabricNo = ["T2203-05", "T2203-06", "T2203-07", "T2203-08", "T2203-09"] //FabricNo
const numberid = ref<number>(0) //listnumber
const imageUrl = ["./T2203-05.jpg", "./T2203-06.jpg", "./T2203-07.jpg", "./T2203-08.jpg", "./T2203-09.jpg"] //imageUrl
const items = Array.from(Array(5)).map((_, i) => (
  { nth: i + 1, no: i, image: imageUrl[i], name: "FOX : Modacrylic" }
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