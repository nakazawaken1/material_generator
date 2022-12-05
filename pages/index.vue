<template>
  <main v-if="isLoggedIn()">
    <Generator />
  </main>
  <main v-else>
    <Login />
  </main>
</template>

<script setup lang="ts">
const { isLoggedIn } = useAuth()
</script>

<style lang="scss" scoped>
main {}
</style>