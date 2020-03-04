<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2">
          <v-card-title class="display-1">FAQ</v-card-title>
          <v-expansion-panels inset>
            <v-expansion-panel v-for="(item,i) in 5" :key="i">
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
    }
  },

  mounted() {},

  methods: {
    // receives a place object via the autocomplete component
  }
}
</script>