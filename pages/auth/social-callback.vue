<template>
  <v-container class="d-flex justify-center">
    <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      token: this.$route.query.token ? this.$route.query.token : null
    }
  },
  mounted() {
    this.$auth.setToken('local', 'Bearer ' + this.token)
    this.$auth.setStrategy('local')
    this.$auth
      .fetchUser()
      .then(() => {
        this.$store.commit('SET_SNACKBAR', {
          icon: 'mdi-human-greeting',
          text: 'Welcome ' + this.$auth.user.name
        })
        return this.$router.push('/')
      })
      .catch(e => {
        this.$auth.logout()
        return this.$router.push(`/?error=unable to get user`)
      })
  }
}
</script>