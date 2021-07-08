<template>
  <nav class="sidebar">
    <ul>
      <li>
        Lecteur
        <ul>
          <li>
            <nuxt-link to="/player/create">
              Créer
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/player/join">
              Rejoindre
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }

}

</script>
