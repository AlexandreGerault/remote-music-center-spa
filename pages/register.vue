<template>
  <div class="vertical-centering">
    <div class="wrapper card">
      <h1>Inscription</h1>

      <form @submit.prevent="register">
        <div class="form__two__cols">
          <label for="pseudo">Pseudo</label>
          <input id="pseudo" v-model="pseudo" type="text" name="pseudo">

          <label for="email">Adresse e-mail</label>
          <input id="email" v-model="email" type="email" name="email">

          <label for="password">Mot de passe</label>
          <input id="password" v-model="password" type="password" name="password">
        </div>

        <input type="submit" value="Valider l'inscription">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      pseudo: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$axios.$post('/auth/register', {
        email: this.email,
        password: this.password
      })
    }
  }
}

</script>
