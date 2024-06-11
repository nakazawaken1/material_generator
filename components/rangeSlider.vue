<template>
    <input type="range" min="0" :max="data.max" v-model="data.range" class="range">
</template>
  
<script setup>
const props = defineProps({ range: { type: Number, default: 0 }, max: { type: Number, default: 0 }, value: { type: Number, default: 0 } });
const data = reactive({ range: props.range, max: props.max, value: props.value })

const emit = defineEmits(['update:range'])

watch(() => data.range, () => emit('update:range', Number(data.range)))
</script>
<style lang="scss" scoped></style>