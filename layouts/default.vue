<template>
  <v-app>
    <NavBar />
    <v-content>
      <nuxt />
    </v-content>

    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + Math.random()"
      :style="`top: ${index * 60 + 10}px`"
      v-model="snackbar.showing"
      top
      :color="snackbar.color"
      :timeout="4000"
    >
      <v-icon class="mr-2">{{ snackbar.icon }}</v-icon>
      {{ snackbar.text }}
      <v-btn dark text @click="snackbar.showing = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
import NavBar from '@/components/Navbar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {}
  },
  mounted() {
    this.initialize()
    let myNav = document.getElementById('nav')
    window.onscroll = function() {
      'use strict'
      if (document.body.scrollTop >= 200) {
        myNav.classList.add('nav-transparent')
      } else {
        myNav.classList.remove('nav-transparent')
      }
    }
  },

  computed: {
    ...mapGetters({
      bikes: 'bikes',
      snackbar: 'snackbar'
    }),
    ...mapState({
      snackbars: 'snackbars'
    })
  },

  methods: {
    ...mapActions(['getVehicles']),
    async initialize() {
      await this.getVehicles()
    }
  }
}
</script>
<style scoped>
.nav-transparent {
  background-color: transparent;
}
</style>
