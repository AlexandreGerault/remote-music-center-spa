<template>
  <div class="wrapper card">
    <h1>Connexion</h1>

    <form>
      <div class="form__two__cols">
        <label for="pseudo">Pseudo</label>
        <input id="pseudo" type="text" name="pseudo">

        <label for="password">Mot de passe</label>
        <input id="password" type="password" name="password">

        <input id="remember" type="checkbox" name="remember">
        <label for="remember">Se rappeler de moi</label>
      </div>

      <input type="submit" value="Connexion">
    </form>
  </div>
</template>
