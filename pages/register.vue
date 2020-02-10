<template>
  <div class="wrapper card">
    <h1>Inscription</h1>

    <form>
      <div class="form__two__cols">
        <label for="pseudo">Pseudo</label>
        <input id="pseudo" type="text" name="pseudo">

        <label for="email">Adresse e-mail</label>
        <input id="email" type="email" name="email">

        <label for="password">Mot de passe</label>
        <input id="password" type="password" name="password">

        <label for="confirm">Confirmation du mot de passe</label>
        <input id="confirm" type="password" name="confirm">
      </div>

      <input type="submit" value="Valider l'inscription">
    </form>
  </div>
</template>
