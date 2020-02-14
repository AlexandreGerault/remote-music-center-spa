<template>
  <form @submit.prevent="logout">
    <input type="submit" value="Déconnecter">
  </form>
</template>

<script>

export default {
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}

</script>

<style lang="scss" scoped>

input[type="submit"] {
  margin-top: 0;
}

</style>
