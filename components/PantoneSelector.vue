<template>
  <ul class="PantoneSelector">
    <li v-for="pair of PantoneRGBTable" :key="pair[0]" :style="{ '--color': '#' + pair[1] }"
      @click="emits('pickcolor', pair[1]), emits('colorname', pair[0])"><a :title="pair[0]"></a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PantoneRGBTable } from '~~/composables/PantoneRGBTable';
const emits = defineEmits<{
  (e: "pickcolor", color: string): void;
  (e: "colorname", color: string): void;
}>();
</script>

<style lang="scss" scoped>
.PantoneSelector {
  display: flex;
  flex-wrap: wrap;
  max-width: 380px;

  li {
    width: 10px;
    height: 10px;
    background-color: var(--color);
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    cursor: pointer;

    >a {
      background-color: transparent;

      &:hover::before {
        content: attr(title);
        display: block;
        position: absolute;
        left: 0;

        top: -30px;
        z-index: 1;
        opacity: 1;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid #999999;
        padding: 2px 8px;
        white-space: nowrap;
      }
    }
  }
}
</style>
