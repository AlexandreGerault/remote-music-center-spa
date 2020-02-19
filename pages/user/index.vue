<template>
  <div>
    <p>{{ loggedInUser.name }}</p>
    <p>{{ userPlayer.name }}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser', 'userPlayer'])
  }
}
</script>
