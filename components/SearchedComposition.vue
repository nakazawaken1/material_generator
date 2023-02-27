<template>
  <table class="SearchedComposition">
    <thead>
      <tr>
        <th></th>
        <th>Fabric Type</th>
        <th>Pile Height<br />(mm)</th>
        <th>Fabric<br />Weight(g/m)</th>
        <th>Width(cm)</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody v-for="(item, n) in filterList(fabricType.label)" :key="n" @click="(detail = example), (detail.fabricnumber = item.FabricType),
      (detail.fabricWeight = item.fabricWeight), (detail.fabricWeightMin = item.minfabricWeight),
      (detail.fabricWeightMax = item.maxfabricWeight), (detail.fabricWeightStep = item.stepfabricWeight),
      (detail.fabricPileHeight = item.pileheight), (detail.width = item.width),
      (detail.label = item.label), (detail.ghFiness = item.ghFiness),
      (detail.ghRatio = item.ghRatio), (detail.fabricHeight = item.pileheight),
      (detail.fabricHeightMin = item.minpileheight),
      (detail.fabricHeightMax = item.maxpileheight), (detail.fabricHeightStep = item.steppileheight)">
      <tr>
        <td>{{ n + 1 }}</td>
        <td>{{ item.FabricType }}</td>
        <td>{{ item.pileheight }}</td>
        <td>{{ item.fabricWeight }}</td>
        <td>{{ item.width }}</td>
        <td v-for="(imageitem, n) in imageList(item.FabricType)" :key="n">
          <img :src="(imageitem.Imagepath)" />
        </td>
      </tr>

    </tbody>
  </table>
  <Detail :isOpen="detail != null" @update:isOpen="detail = null" :item="detail" />
</template>

<script lang="ts" setup>
import { Item, example, fabricTypesTable, filteredList, filterList, FabricInfo, imageList } from "~~/composables/models/Item"
const props = defineProps([
  "fabricType"
])
const fabricNumber = ref<string>("")//FabricNo
const fabricWeight = ref<number>(0)
//以上compositiondata

const detail = ref<Item | null>(null)

</script>

<style lang="scss" scoped>
table.SearchedComposition {

  tbody {
    &:hover {
      background-color: #ffff88;
      cursor: pointer;
    }
  }

  th,
  td {
    padding: 0.5rem;
    border: 1px solid #818181;

    >img {
      width: 8rem;
    }
  }

  th,
  td.head {
    background-color: #dddddd;
  }
}
</style>