export const strict = false

export const state = () => ({
  bikes: [],

  snackbars: []
})

export const getters = {
  bikes(state) {
    return state.bikes
  },
  snackbar(state) {
    return state.snackbar
  }
}

export const mutations = {
  SET_BIKES(state, bikes) {
    state.bikes = bikes
  },
  SET_SNACKBAR(state, snackbar) {
    snackbar.showing = true
    snackbar.icon = snackbar.icon || 'mdi-alert-circle-outline'
    snackbar.color = snackbar.color || 'success'
    state.snackbars = state.snackbars.concat(snackbar)
    //  this.$toast.show('Please Log in')
  }
}

export const actions = {
  async getVehicles({ commit }) {
    let response = await this.$axios.$get('/bikes')

    commit('SET_BIKES', response.data)
  },
  setSnackbar({ commit, snackbar }) {
    snackbar.showing = true
    commit('SET_SNACKBAR', snackbar)
    console.log(snackbar)
  }
}
