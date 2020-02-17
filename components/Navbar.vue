<template>
  <nav class="topbar">
    <div class="navbar__left">
      <nuxt-link to="/">
        RMC
      </nuxt-link>
    </div>

    <div class="navbar__right">
      <ul class="menu">
        <li v-if="!isAuthenticated">
          <nuxt-link to="/login">
            Connexion
          </nuxt-link>
        </li>
        <li v-if="!isAuthenticated">
          <nuxt-link to="/register">
            Inscription
          </nuxt-link>
        </li>
        <li v-if="isAuthenticated">
          <nuxt-link to="/user">
            {{ loggedInUser.name }}
          </nuxt-link>
        </li>
        <li v-if="isAuthenticated">
          <Logout />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { mapGetters } from 'vuex'
import Logout from '~/components/Logout'

export default {

  components: {
    Logout
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }

}

</script>
