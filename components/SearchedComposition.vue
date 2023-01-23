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
    <tbody v-for="(rows, n) of table" :key="n" @click="(detail = example), (numberid = n)">
      <tr v-for=" (row, y) of rows" :key="y">
        <td :class="{ head: x == 0 && y == 0 }" v-for="(cell, x) of row"
          :rowspan="y != 0 || [3, 4, 5, 6].includes(x) ? undefined : 3">
          <img v-if="(x == 12)" :src="imageUrl[n]" />
          <template v-else>{{ cell }}</template>
        </td>
      </tr>
    </tbody>
  </table>
  <Detail :isOpen="detail != null" @update:isOpen="detail = null" :item="detail" :fabricNo="fabricNo"
    :numberid="numberid" />
</template>

<script lang="ts" setup>
import { Item, example } from "~~/composables/models/Item"
const fabricNo = ["T2203-05", "T2203-06", "T2203-07", "T2203-08", "T2203-09"] //FabricNo
const numberid = ref<number>(0) //listnumber
const imageUrl = ["./T2203-05.jpg", "./T2203-06.jpg", "./T2203-07.jpg", "./T2203-08.jpg", "./T2203-09.jpg"] //imageUrl
//以下compositiondata
const elplist = ["18x51", "18x51", "18x51", "18x51", "27x51"]
const mcslist = ["4.4x32", "4.4x32", "4.4x32", "4.4x32", "4.4x32"]
const elpratio = ["30%", "50%", "30%", "30%", "30%"]
const mcsratio = ["70%", "50%", "70%", "70%", "70%"]
const pileheight = ["19/22", "19/22", "13/15", "19/22", "19/22"]
const fabricWeight = [1100, 1010, 980, 660, 1040]
const width = [152, 150, 152, 148, 149]
//以上compositiondata

const detail = ref<Item | null>(null)
const table = Array.from(Array(5)).map((_, i) => [
  [i + 1, fabricNo[i], "Modacrylic", "ELP", elplist[i], elpratio[i], "#28-2", pileheight[i], "Plain", pileheight[i], fabricWeight[i], width[i], imageUrl[i]],
  ["MCS", mcslist[i], mcsratio[i], "#EM4-5"]
])

provide('fabricNo', fabricNo)
provide('numberid', numberid)
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