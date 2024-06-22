<template>
  <ul class="PantoneSelector">
    <li v-for="color of colors" :key="color.code" :style="{ '--color': `rgb(${color.rgb})` }"
      @click="emits('update:modelValue', color)"><a :title="color.code + ' ' + color.name"></a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: "update:modelValue", modelValue: Color): void
}>()
const colors = useColors()
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
