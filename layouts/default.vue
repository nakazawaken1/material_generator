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
const config = useRuntimeConfig()
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
  font-size: 1.4rem;
  color: #4d5156;
}
</style>

<style lang="scss" scoped>
.layout {

  >header {
    /*
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: #222222;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.16);
    color: #ffffff;
    */
  }

  >div {
    min-height: 90vh;
    height: 100vh;
  }

  >footer {}
}
</style>