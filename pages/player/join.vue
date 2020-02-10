<template>
  <div class="wrapper card">
    <h1>Rejoindre un lecteur</h1>

    <form class="form__vertical">
      <input id="player-id" type="text" name="player-id" placeholder="#548756">
      <nuxt-link to="/player/create">
        Créer un lecteur
      </nuxt-link>

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
  </div>
</template>
