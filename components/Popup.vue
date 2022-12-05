<template>
  <div class="Popup" v-if="isOpen">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  isOpen: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
})
</script>

<style lang="scss" scoped>
.Popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>