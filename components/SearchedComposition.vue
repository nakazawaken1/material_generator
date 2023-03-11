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
    <tbody
      v-for="(item, n) in filterItems(props)"
      :key="n"
      @click="detail = item"
    >
      <tr>
        <td>{{ n + 1 }}</td>
        <td>{{ item.FabricType }}</td>
        <td>{{ item.pileheight }}</td>
        <td>{{ item.fabricWeight }}</td>
        <td>{{ item.width }}</td>
        <td>
          <img :src="item.Imagepath" />
        </td>
      </tr>
    </tbody>
  </table>
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

    > img {
      width: 8rem;
    }
  }

  th,
  td.head {
    background-color: #dddddd;
  }
}
</style>