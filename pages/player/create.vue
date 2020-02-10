<template>
  <div class="wrapper card">
    <h1>Créer un lecteur</h1>

    <form class="form__two__cols">
      <label for="name">Nom du lecteur</label>
      <input id="name" type="text" name="name">

      <input id="display-next-song" type="checkbox" name="display-next-song">
      <label for="display-next-song">Afficher la musique à venir aux utilisateurs</label>

      <input id="allow-guests" type="checkbox" name="allow-guests">
      <label for="allow-guests">Autoriser les comptes visiteurs</label>

      <input id="allow-chat" type="checkbox" name="allow-chat">
      <label for="allow-chat">Activer la messagerie instantanée</label>

      <label for="max-duration">Durée maximale d'un morceau</label>
      <input id="max-duration" type="time" name="max-duration">

      <label for="password">Mot de passe (optionnel)</label>
      <input id="password" type="password" name="password">
    </form>

    <input type="submit" value="Créer le lecteur">
  </div>
</template>
