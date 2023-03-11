<template>
  <main v-if="isLoggedIn()">
    <Generator />
  </main>
  <main v-else>
    <Login />
  </main>
</template>

<script setup lang="ts">
const { isLoggedIn } = useAuth();
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: flex;
  align-content: center;
}

@media only screen and (max-width: 1024px) {
  main {
    flex-direction: column-reverse;
  }
}

@media only screen and (max-width: 599px) {
  main {
    padding: 0 20px;
  }
}
</style>