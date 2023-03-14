<template>
  <main v-if="isLoggedIn()">
    <Generator />
  </main>
  <main v-else>
    <div class="login">
      <Login />
    </div>
  </main>
</template>

<script setup lang="ts">
const { isLoggedIn } = useAuth();
</script>

<style lang="scss" scoped>
main {}

.login {
  display: flex;
  justify-content: center;
  align-items: center;

}

@media only screen and (max-width: 1024px) {
  main {
    flex-direction: column-reverse;
  }

  .login {
    display: flex;
    flex-direction: column-reverse;
  }

}

@media only screen and (max-width: 599px) {
  main {}
}
</style>