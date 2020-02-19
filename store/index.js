export const state = () => ({
  player: {}
})

export const mutations = {
  JOIN_PLAYER (state, id) {
    state.auth.user.player_id = id
  },

  UPDATE_PLAYER (state, data) {
    state.player = data
  }
}

export const actions = {
  joinPlayer (context, id) {
    context.commit('JOIN_PLAYER', id)
  },

  async updatePlayer (context) {
    const { data } = await this.$axios.get('players/current')
    context.commit('UPDATE_PLAYER', data)
  }
}

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  },

  userPlayer (state) {
    return state.player
  }
}
