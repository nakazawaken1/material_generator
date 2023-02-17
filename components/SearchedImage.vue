<template>
  <ul class="SearchedImage">
    <li v-for="item of filteredList(fabricType.label)" :key="item.id" @click="(detail = example), (detail.fabricnumber = item.fabricNumber), (detail.fabricWeight = item.fabricWeight),
      (detail.fabricWeightMin = item.minfabricWeight), (detail.fabricWeightMax = item.maxfabricWeight),
      (detail.fabricWeightStep = item.stepfabricWeight), (detail.fabricPileHeight = item.pileheight),
      (detail.width = item.width), (detail.label = item.label), (detail.ghFiness = item.ghFiness),
      (detail.ghRatio = item.ghRatio), (detail.fabricHeight = item.pileheight),
      (detail.fabricHeightMin = item.minpileheight),
      (detail.fabricHeightMax = item.maxpileheight), (detail.fabricHeightStep = item.steppileheight)">
      <img :src="item.imageicon" />
      <label>{{ item.label }}</label>
    </li>
  </ul>
<Detail :isOpen="detail != null" :item="detail" @update:isOpen="detail = null" />
</template>

<script lang="ts" setup>
import { Item, example, filteredList } from "~~/composables/models/Item"
const props = defineProps([
  "fabricType"
])

const detail = ref<Item | null>(null)

const furkinds = ["Fox", "Mink", "Rabbit"]
const fabricTypes: string = ""//FabricNo
const numberid = ref<number>(0) //listnumber
const imageUrl = ["./T2202-01.jpg", "./T2203-05.jpg", "./T2202-12.jpg"] //imageUrl
const furname = ["Fox : Modacrylic", "MINK: Modacrylic", "Rabbit: Modacrylic"]
const items = Array.from(Array(3)).map((_, i) => (
  { nth: i + 1, no: i, image: imageUrl[i], name: furname[i], label: furkinds[i] }
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