<template>
  <v-item-group v-model="selectedvehicle">
    <v-container>
      <v-row>
        {{selectedvehicle}}
        <h1 v-if="!uservehicles" class="mx-auto subtitle-1">You have no saved vehicles.</h1>
        <v-col v-for="vehicle in uservehicles" :key="vehicle.id" cols="12" md="4">
          <v-item v-slot:default="{ active, toggle }" :value="vehicle">
            <v-card :color="active ? 'success' : 'primary'" dark @click="toggle" hover>
              <v-card-title>
                {{vehicle.name}}
                <v-scroll-y-transition>
                  <v-icon v-if="active">mdi-check-circle-outline</v-icon>
                </v-scroll-y-transition>
              </v-card-title>
              <v-card-subtitle>{{vehicle.type}} - {{vehicle.reg}}</v-card-subtitle>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script>
export default {
  data() {
    return {
      uservehicles: null,
      selectedvehicle: null
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    async initialize() {
      await this.$axios
        .$get('user/savedvehicle')
        .then(res => {
          this.uservehicles = res.data
        })
        .catch(e => console.log(e))
    },
    updateVehicleList(vehicle) {
      console.log(vehicle)
      if (this.uservehicles == null) {
        this.uservehicles = []
        this.uservehicles.push(vehicle)
      } else this.uservehicles.push(vehicle)
    }
  }
}
</script>