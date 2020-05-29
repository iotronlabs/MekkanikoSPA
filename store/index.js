export const strict = false

export const state = () => ({
  bikes: [],
  cars: [],
  snackbars: []
})

export const getters = {
  bikes(state) {
    return state.bikes
  },
  cars(state) {
    return state.cars
  },
  snackbar(state) {
    return state.snackbar
  }
}

export const mutations = {
  SET_BIKES(state, bikes) {
    state.bikes = bikes
  },
  SET_CARS(state, cars) {
    state.cars = cars
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
  async getVehicles({
    commit
  }) {
    let responsebikes = await this.$axios.$get('/bikes')
    let responsecars = await this.$axios.$get('/cars')

    commit('SET_BIKES', responsebikes.data)
    commit('SET_CARS', responsecars.data)
  },
  setSnackbar({
    commit,
    snackbar
  }) {
    snackbar.showing = true
    commit('SET_SNACKBAR', snackbar)
    console.log(snackbar)
  }
}
