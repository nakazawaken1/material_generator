<template>
  <button class="Button" type="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.Button {
  appearance: none;
  border: 1px solid #818181;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #ffccff;
  }
}
</style>