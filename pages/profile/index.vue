<template>
  <v-container fluid>
    <v-card>
      <v-card-title>{{user.name}}</v-card-title>
    </v-card>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
}
</script>