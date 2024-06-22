<template>
  <div class="table-wrapper">
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
      <tbody v-for="(item, n) in filterItems(props)" :key="n" @click="emits('update:modelValue', item)">
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
  </div>
</template>

<script lang="ts" setup>
import type { Item } from "@/composables/models/Item";
import { filterItems } from "@/composables/models/Item";
const props = defineProps<{
  labels: string[];
  searchWord: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: Item): void;
}>();
</script>

<style lang="scss" scoped>
.table-wrapper {
  padding-right: 2.23213rem;
  padding-left: 2.23213rem;

  table.SearchedComposition {
    width: 100%;

    thead {
      tr {
        border: none;
      }
    }

    tbody {
      &:hover {
        background-color: #ffff88;
        cursor: pointer;
      }

      tr {
        border-bottom: solid 1px #B0B0B0;

        &:first-child {
          border-top: solid 1px #B0B0B0;
        }

        &:last-child {
          border-top: solid 1px #B0B0B0;
        }


      }

    }


    th,
    td {

      >img {
        width: 10rem;
      }
    }

    th {
      padding: 10px;
      font-size: 1.2rem;
      font-style: italic;

    }

    td {
      padding: 10px;
      text-align: center;
    }
  }
}
</style>