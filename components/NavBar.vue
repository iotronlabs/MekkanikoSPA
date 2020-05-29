<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary app style="z-index:110">
      <v-list nav shaped>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              {{
              $auth.loggedIn == 0 ? 'Welcome Guest' : user.name
              }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{
              $auth.loggedIn == 0 ? 'Kindly Login' : user.email
              }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click.prevent="item.title == 'Contact US' ? contactWA() : ''"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>
          <v-switch v-model="$vuetify.theme.dark" color="primary" label="Dark"></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dense app id="nav" class="nav-transparent" flat style="z-index:105">
      <v-app-bar-nav-icon @click.stop="toggle" color="secondary" />
      <nuxt-link :to="{ name: 'index' }">
        <v-img :src="require('@/assets/icon.png')" contain height="35" width="35" />
      </nuxt-link>
      <div class="hidden-sm-and-down">
        <div class="d-flex align-center mx-5">
          <div v-for="(item, i) in items" :key="i">
            <v-btn
              text
              :to="item.to"
              color="secondary"
              @click.prevent="item.title == 'Contact US' ? contactWA() : ''"
            >{{ item.title }}</v-btn>
          </div>
        </div>
      </div>
      <v-spacer />
      <div v-if="$auth.loggedIn == false">
        <Login />
      </div>
      <!-- Account button -->
      <div v-if="$auth.loggedIn" class="mr-2">
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" fab x-small>
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <ProfileList />
        </v-menu>
      </div>
      <!--   <v-btn icon color="primary">
        <v-icon>mdi-settings</v-icon>
      </v-btn>-->
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
import ProfileList from '@/components/user/ProfileList'
import Login from '@/components/Login'
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-wrench',
          title: 'Services',
          to: '/service'
        },
        {
          icon: 'mdi-comment-question-outline',
          title: 'FAQ',
          to: '/faq'
        },
        {
          icon: 'mdi-whatsapp',
          title: 'Contact US',
          click: 'contactWA'
        }
      ]
    }
  },
  components: {
    Login,
    ProfileList
  },
  methods: {
    toggle() {
      this.drawer = !this.drawer
    },

    contactWA() {
      window.location.href = 'https://wa.me/918250529183'
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
}
</script>
<style scoped>
.nav-transparent {
  background-color: transparent !important;
}
</style>
