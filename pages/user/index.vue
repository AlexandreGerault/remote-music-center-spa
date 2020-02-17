<template>
  <div>
    <p>{{ loggedInUser.name }}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>
