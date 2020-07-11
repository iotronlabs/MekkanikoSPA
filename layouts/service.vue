<template>
  <v-app>
    <NavBar />
    <v-content>
      <nuxt />
    </v-content>

    <v-footer>
      <v-row style="width:100%" class="mx-1">
        <span class="my-auto overline">&copy; 2020 developed by iotron</span>

        <v-spacer />
        <v-btn class small icon title="Go to top" @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-row>
    </v-footer>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + Math.random()"
      :style="`top: ${index * 60 + 10}px`"
      v-model="snackbar.showing"
      top
      dark
      :color="snackbar.color"
      :timeout="4000"
    >
      <v-icon dark class="mr-2">{{ snackbar.icon }}</v-icon>
      {{ snackbar.text }}
      <v-btn text @click="snackbar.showing = false">Close</v-btn>
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
    return {
      items: [
        {
          href: 'https://wa.me/+918250529183',
          icon: 'mdi-whatsapp'
        },
        {
          href: 'https://www.instagram.com/mekkanikoofficial/',
          icon: 'mdi-instagram'
        },
        {
          href: 'https://www.facebook.com/mekkaniko.autoservice/',
          icon: 'mdi-facebook'
        }
      ]
    }
  },
  mounted() {
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
      // bikes: 'bikes',
      snackbar: 'snackbar'
    }),
    ...mapState({
      snackbars: 'snackbars'
    })
  }
}
</script>
<style scoped></style>
