<template>
  <div class="Login-container">
    <i class="fa-solid fa-scroll"></i>
    <h1>welcome to swatchbook!</h1>
    <form>
      <template v-if="step === 0">
        <label for="email">Email address</label>
        <input id="email" type="email" v-model="email" placeholder="email" required />
      </template>
      <template v-else-if="step === 1">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" placeholder="password" required />
      </template>
      <Button id="n-button" @click.prevent="step++">next</Button>
      <Button id="b-button" @click.prevent="step--" :style="{ visibility: step === 1 ? 'visible' : 'hidden' }">←
        Back</Button>
    </form>
  </div>
  <div class="login-right">
    <div class="login-right-bg"></div>
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
.Login-container {
  width: 50%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >i {
    font-size: 5.5rem;
    color: #0d68e1;
    margin-bottom: 50px;
    transform: rotate(-50deg);

  }

  >h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 4rem;
    color: #5d5d5d;
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

      >::placeholder {
        color: #b2b2b2;
      }
    }

    >button {
      margin-top: 2rem;
    }

    #email,
    #password {
      width: 400px;
      height: 50px;
      display: block;
      border-radius: 12px;
      border: none;
      text-align: left;
      box-sizing: border-box;
      font-size: 16px;
      margin-bottom: 10px;
      background: #f8f8f8;
      padding: 0 20px;
    }

    #n-button {
      width: 400px;
      cursor: pointer;
      border-radius: 9px;
      border: none;
      color: #fff;
      background-color: #0d68e1;
      height: 44px;
      font-size: 1.8rem;
      padding: 0 10px;
      transition: .3s;

      :active {
        color: #fff;
      }

    }

    #b-button {
      border: none;
      box-shadow: none;
      background-color: #fff;
      text-align: left;
      width: 100px;
      margin-top: 10px;

    }
  }
}

@media only screen and (max-width:1024px) {
  .Login-container {
    width: 100%;
    height: 44vh;
    justify-content: flex-start;

    >i {
      font-size: 4.5rem;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 2.2rem;
      margin-bottom: 2rem;

    }

    >form {
      width: 43%;

      >label {
        width: 100%;
        font-size: 1.2rem;
      }

      #email,
      #password {
        width: 100%;
        height: 40px;
        margin-bottom: 0;
      }

      #email,
      #password {}

      #n-button {
        width: 100%;
      }

    }

  }
}

@media only screen and (max-width:599px) {
  .Login-container {
    height: 47vh;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;

    }

    >form {
      width: 60%;

      >label {
        font-size: 1rem;
      }

      >input {
        width: 100%;
        height: 40px;
        font-size: 1.3rem;

        >::placeholder {}
      }

      #email,
      #password {
        height: 38px;
        font-size: 1.3rem;
        margin-bottom: 0;
      }

      .Button {
        width: 100%;
      }

      #n-button {
        width: 100%;
        height: 38px;
        font-size: 1.3rem;

      }
    }
  }
}

.login-right {
  width: 50%;
  display: flex;
  align-content: center;
  align-items: center;

  &-bg {
    background-image: url(~/assets/login-bg.png);
    display: block;
    width: 100vw;
    height: 50vh;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
}

@media only screen and (max-width:1024px) {

  .login-right {
    width: 100%;
    height: 50vh;
    align-items: flex-end;
    margin-bottom: 40px;

    &-bg {
      height: 100%;
      background-size: 55%;
      background-position: 50% 100%;
    }

  }
}

@media only screen and (max-width:599px) {

  .login-right {
    height: 50vh;

    &-bg {
      height: 100%;
      background-size: 80%;
      background-position: 50% 95%;

    }

  }
}
</style>