export const state = () => ({
})

export const mutations = {
  JOIN_PLAYER (state, id) {
    state.auth.user.player_id = id
  }
}

export const actions = {
  joinPlayer (context, id) {
    context.commit('JOIN_PLAYER', id)
  }
}

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  }
}
