<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app style="z-index:25;" >
      <v-list>
         <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
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

      <v-app-bar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" app>
      <v-row>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

        <v-toolbar-title v-text="title"  />

        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-settings</v-icon>
        </v-btn>
      </v-row>
      </v-app-bar>
     
    
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {

        drawer: false,

        items: [{
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Service',
            to: '/service'
          }
        ],

        title: "John's Apartment"
      }
    }
  }

</script>
