<template>
  <div class="layout">
    <header>
      <h1>{{ config.NAME }}</h1>
      <address v-if="auth" @click="(confirm = true)">{{ auth.email }} ×</address>
    </header>
    <div>
      <slot />
    </div>
    <footer></footer>
    <Confirm v-model:isOpen="confirm" @close="$event == 'OK' ? logout() : void 0">利用を終了してログアウトします。よろしいですか？</Confirm>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig().public
const { auth, logout } = useAuth()
const confirm = ref(false)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
}

html {
  font-size: 10px;
}

body * {
  font-size: 1.7rem;
}
</style>

<style lang="scss" scoped>
.layout {
  background-color: #f6f1ed;

  >header {
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    align-items: center;

    >address {
      cursor: pointer;
      padding-right: 10px;
    }
  }

  >div {
    min-height: 90vh;
    height: 100vh;
  }
}
</style>