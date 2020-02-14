<template>
  <div class="vertical-centering">
    <div class="wrapper card">
      <h1>Rejoindre un lecteur</h1>

      <template v-if="isAuthenticated">
        <form @submit.prevent="join" class="form__vertical">
          <input id="player-id" v-model="playerId" type="text" name="player-id" placeholder="#548756">
          <nuxt-link to="/player/create">
            Créer un lecteur
          </nuxt-link>
          <input type="submit" value="Rejoindre">
        </form>
      </template>
      <template v-else>
        <form @submit.prevent="guestjoin" class="form__vertical">
          <input id="username" v-model="username" type="text" name="name" placeholder="John Doe">
          <input id="player-id" v-model="playerId" type="text" name="player-id" placeholder="#548756">
          <input type="submit" value="Continuer en tant qu'invité">
          <div class="secondary__actions">
            <nuxt-link to="/login">
              Connexion
            </nuxt-link>

            <nuxt-link to="/register">
              Inscription
            </nuxt-link>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  data () {
    return {
      username: '',
      playerId: ''
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async join () {
      await this.$axios.post('/players/join', {
        player: this.playerId
      })
    }
  }

}

</script>
