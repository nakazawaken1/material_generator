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
  display: flex;
  align-content: center;
  justify-content: space-between;

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