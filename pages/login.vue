<template>
  <div class="vertical-centering">
    <div class="wrapper card">
      <h1>Connexion</h1>

      <form @submit.prevent="login">
        <div class="form__two__cols">
          <label for="email">Adresse email</label>
          <input id="email" v-model="email" type="email" name="email">

          <label for="password">Mot de passe</label>
          <input id="password" v-model="password" type="password" name="password">

          <label for="remember">Se rappeler de moi</label>
          <input
            id="remember"
            v-model="remember"
            type="checkbox"
            name="remember"
            class="margin_right_auto"
          >
        </div>

        <input type="submit" value="Connexion">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  auth: 'guest',
  data () {
    return {
      email: '',
      password: '',
      remember: false
    }
  },
  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}

</script>
