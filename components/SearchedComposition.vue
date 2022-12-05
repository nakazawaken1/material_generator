<template>
  <table class="SearchedComposition">
    <thead>
      <tr>
        <th></th>
        <th>Fabric Type</th>
        <th>Material</th>
        <th>Spec</th>
        <th>Composition</th>
        <th>Ratio(%)</th>
        <th>Pantone</th>
        <th>シャーリング<br />加工(mm)</th>
        <th>Knitting</th>
        <th>Pile Height<br />(mm)</th>
        <th>Fabric<br />Weight(g/m)</th>
        <th>Width(cm)</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody v-for="(rows, n) of table" :key="n" @click="(detail = example)">
      <tr v-for="(row, y) of rows" :key="y">
        <td :class="{ head: x == 0 && y == 0 }" v-for="(cell, x) of row"
          :rowspan="y != 0 || [3, 4, 5, 6].includes(x) ? undefined : 3">
          <img v-if="(x == 12)" src="~assets/fox.jpg" />
          <template v-else>{{ cell }}</template>
        </td>
      </tr>
    </tbody>
  </table>
  <Detail :isOpen="detail != null" @update:isOpen="detail = null" :item="detail" />
</template>

<script lang="ts" setup>
import { Item, example } from "~~/composables/models/Item"
const detail = ref<Item | null>(null)
const table = Array.from(Array(10)).map((_, i) => [
  [i + 1, "FOX", "Modacrylic", "ELP", "27×46", "30%", "#FFFFFF", "Non Cut", "Plain", 12, 1800, 153, "fox.jpg"],
  ["RCL", "7.8×44", "30%", "#FFFFFF"],
  ["AH", "3.3×38", "40%", "#FFFFFF"]
])
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