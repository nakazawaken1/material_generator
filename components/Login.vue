<template>
  <div class="Login">
    <h1>Sign in</h1>
    <form>
      <template v-if="step === 0">
        <label for="email">Email address</label>
        <input id="email" type="email" v-model="email" required />
      </template>
      <template v-else-if="step === 1">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required />
      </template>
      <Button @click.prevent="step++">Next</Button>
      <Button @click.prevent="step--" :style="{ visibility: step === 1 ? 'visible' : 'hidden' }">Back</Button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { login } = useAuth()
const email = ref("test@example.com")
const password = ref("1234")
const step = ref(0)
watch(step, (now, old) => {
  switch (now) {
    case 1:
      //$fetch("/api/mailer", { params: { email: email.value } })
      break;
    case 2:
      login(email.value, password.value)
      break;
  }
})
</script>

<style lang="scss" scoped>
.Login {
  >h1 {
    font-size: 6rem;
    margin-bottom: 4rem;
  }

  >form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    >* {
      padding: 0.5rem 1rem;
      width: 30rem;
    }

    >label {
      color: #818181;
    }

    >input {
      border: none;
      border-bottom: 1px solid #818181;
    }

    >button {
      margin-top: 1rem;
    }
  }

  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
</style>