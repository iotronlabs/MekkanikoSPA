<template>
  <v-list shaped>
    <v-list-item-group v-model="item" color="primary">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click.prevent="item.title == 'Logout' ? logoutUser() : ''"
        :to="item.to != undefined ? item.to : '' "
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      item: 0,
      hover: false,
      items: [
        {
          icon: 'mdi-home-account',
          title: 'Profile',
          to: 'profile',
          click: ''
        },
        {
          icon: 'mdi-clipboard-list',
          title: 'Orders',
          to: 'profile/orders',
          click: ''
        },

        {
          icon: 'mdi-map-marker',
          title: 'Saved Addresses',
          to: 'profile/addresses',
          click: ''
        },

        { icon: 'mdi-logout', title: 'Logout', click: 'logoutUser' }
      ]
    }
  },
  methods: {
    async logoutUser() {
      await this.$auth.logout().then(() => {
        this.$router.push('/')
        this.$store.commit('SET_SNACKBAR', {
          icon: 'mdi-human-greeting',
          text: 'Goodbye, log off successful.',
          color: 'info'
        })
      })
    }
  }
}
</script>