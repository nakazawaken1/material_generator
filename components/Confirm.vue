<template>
  <Popup :isOpen="isOpen">
    <article class="Confirm">
      <header v-if="title" v-html="title"></header>
      <section>
        <slot />
      </section>
      <form :style="{ '--template': Array.from(Array(buttons.length)).map(i => '1fr').join(' ') }">
        <Button v-for="button of buttons" @click.stop="(emits('close', button), emits('update:isOpen', false))">{{
            button
        }}</Button>
      </form>
    </article>
  </Popup>
</template>

<script lang="ts" setup>
export interface Props {
  title?: string,
  isOpen: boolean,
  buttons?: string[]
}
export interface Emits {
  (e: "close", button: string): void
  (e: "update:isOpen", button: false): void
}

const props = withDefaults(defineProps<Props>(), {
  title: "確認",
  isOpen: false,
  buttons: () => ["OK", "キャンセル"]
})
const emits = defineEmits<Emits>()
</script>

<style lang="scss" scoped>
article.Confirm {
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #ffffff;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  >header {
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    border-radius: 1rem 1rem 0 0;
    padding: 0.5rem 1rem;
  }

  >section {
    padding: 1rem;
  }

  >form {
    display: grid;
    gap: 1rem;
    grid-template-columns: var(--template);
    padding: 1rem;
  }
}
</style>