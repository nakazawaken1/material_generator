<template>
  <ul class="PantoneSelector">
    <li v-for="pair of PantoneRGBTable" :key="pair[0]" :style="{ '--color': '#' + pair[1] }" :title="pair[0]"
      @click="emits('pickcolor', pair[1]), emits('colorname', pair[0])">
      <a>{{ pair[0] }}</a>
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

    a {
      display: block;
      opacity: 0;

      &:hover {
        z-index: 1;
        opacity: 1;
        position: absolute;
        bottom: 10px;
        left: 0;
        background-color: #ffffff;
        border-radius: 4px;
        border: 1px solid #999999;
        padding: 2px;
        white-space: nowrap;
      }
    }
  }
}
</style>
