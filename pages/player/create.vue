<template>
  <div class="vertical-centering">
    <div class="wrapper card">
      <h1>Créer un lecteur</h1>

      <form @submit.prevent="createPlayer" class="form__two__cols">
        <label for="name">Nom du lecteur</label>
        <input id="name" v-model="playerName" type="text" name="name">

        <label for="display-next-song">Afficher la musique à venir aux utilisateurs</label>
        <input id="display-next-song" type="checkbox" name="display-next-song">

        <label for="allow-guests">Autoriser les comptes visiteurs</label>
        <input id="allow-guests" type="checkbox" name="allow-guests">

        <label for="allow-chat">Activer la messagerie instantanée</label>
        <input id="allow-chat" type="checkbox" name="allow-chat">

        <label for="max-duration">Durée maximale d'un morceau</label>
        <input id="max-duration" type="time" name="max-duration">

        <label for="password">Mot de passe (optionnel)</label>
        <input id="password" v-model="password" type="password" name="password">

        <input type="submit" value="Créer le lecteur">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  data () {
    return {
      playerName: '',
      password: null
    }
  },
  computed: {
    parameters () {
      const params = {}

      params.player = this.playerId
      if (this.password) {
        params.password = this.password
      }

      return params
    }
  },
  methods: {
    async createPlayer () {
      try {
        await this.$axios.post('players/store', this.parameters)
      } catch (error) {
      }
    }
  }
}

</script>
