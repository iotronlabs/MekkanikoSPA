<template>
  <v-app>
    <NavBar />
    <v-content>
      <nuxt />
    </v-content>

    <!-- <v-footer>
      <v-row>
        <v-col>
          <v-img :src="require('@/assets/logo.png')" max-width="200px" />
          <p class="subtitle-2"></p>
          <v-btn v-for="(item, i) in items" :key="i" :href="item.href" icon text target="_blank">
            <v-icon v-text="item.icon" />
          </v-btn>
          <v-btn class large outlined>Join Our network</v-btn>
        </v-col>
        <v-col>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMekkaniko-Online-Car-Bike-Service-Repair-1799150870167855%2F&tabs=timeline&width=500&height=290&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="100%"
            height="280px"
            style="border:none;overflow:hidden;"
            scrolling="no"
            frameborder="1"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </v-col>
        <v-col>
          <nuxt-link to="/sitemap.xml">Site Map</nuxt-link>
        </v-col>
      </v-row>
      <v-row style="width:100%" class="mx-1">
        <span class="my-auto">&copy; 2020</span>
        <v-spacer />
        <v-btn class small icon title="Go to top" @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-row>
    </v-footer>-->
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
          href: '#!',
          icon: 'mdi-twitter'
        },
        {
          href: '#!',
          icon: 'mdi-instagram'
        },
        {
          href: '#!',
          icon: 'mdi-facebook'
        },
        {
          href: '#!',
          icon: 'mdi-google'
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
