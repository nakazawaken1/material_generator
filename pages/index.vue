<template>
  <div class="common" v-if="isLoggedIn()">
    <Sidebar />
    <main>
      <Generator />
    </main>
  </div>

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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols+2&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');
/* Google Fonts - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

.common {
  display: flex;

  >main {
    width: 100%;
    height: 100%;
    padding-left: 290px;
    padding-right: 20px;

  }

}

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