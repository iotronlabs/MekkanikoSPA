<template>
  <v-app>
    <NavBar />
    <v-content>
      <nuxt />
    </v-content>

    <v-footer>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="3" sm="3">
          <v-img :src="require('@/assets/logo.png')" max-width="200px" />
          <v-divider class="ma-2" />
          <p class="subtitle-2">
            <v-icon>mdi-phone</v-icon>&nbsp;- &nbsp;8250529183
            <br />
            <v-icon>mdi-email</v-icon>&nbsp;- &nbsp;contactus@mekkaniko.com
          </p>
          <v-divider class="ma-2" />
          <v-btn
            class="ma-2"
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            icon
            text
            target="_blank"
          >
            <v-icon v-text="item.icon" />
          </v-btn>
        </v-col>
        <v-col cols="12" md="3" class="text-center">
          <v-btn large outlined class="mx-auto">Join Our network</v-btn>
        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="3"
          class="d-flex flex-row justify-space-between"
          style="width:100%"
        >
          <v-list width="50%" dense class="text-uppercase overline">
            <v-list-item>About us</v-list-item>
            <v-list-item>faq</v-list-item>
            <v-list-item>site map</v-list-item>
            <v-list-item>Refund policy</v-list-item>
            <v-list-item>cancellation policy</v-list-item>
          </v-list>
          <v-list width="50%" dense class="text-uppercase overline">
            <v-list-item to="service">breakdown</v-list-item>
            <v-list-item to="service">maintainance</v-list-item>
            <v-list-item to="service">repair</v-list-item>
            <v-list-item to="service">wash & polish</v-list-item>
            <v-list-item>list of vehicles</v-list-item>
          </v-list>
        </v-col>
      </v-row>
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
