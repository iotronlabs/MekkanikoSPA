<template>
  <v-card :loading="isLoading" flat>
    <v-item-group v-model="selectedvehicle" @change="selectVehicle(selectedvehicle)">
      <v-container>
        <v-row>
          <h1 v-if="uservehicles.length == 0" class="mx-auto subtitle-1">You have no saved vehicles.</h1>
          <v-col v-for="vehicle in uservehicles" :key="vehicle.id" cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }" :value="vehicle">
              <v-card :color="active ? 'success' : 'primary'" dark @click="toggle" hover>
                <v-card-title>
                  {{ vehicle.name }}
                  <v-scroll-y-transition>
                    <v-icon v-if="active">mdi-check-circle-outline</v-icon>
                  </v-scroll-y-transition>
                </v-card-title>
                <v-card-subtitle>{{ vehicle.type }} - {{ vehicle.reg }}</v-card-subtitle>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      uservehicles: [],
      selectedvehicle: null,
      isLoading: false
    }
  },
  mounted() {
    this.initialize()
  },

  methods: {
    async initialize() {
      this.isLoading = true
      await this.$axios
        .$get('user/savedvehicle')
        .then(res => {
          this.uservehicles = res.data
        })
        .catch(e => console.log(e))
      this.isLoading = false
    },
    updateVehicleList(vehicle) {
      console.log(vehicle)
      if (this.uservehicles == null) {
        this.uservehicles = []
        this.uservehicles.push(vehicle)
      } else this.uservehicles.push(vehicle)
    },
    selectVehicle(selectedvehicle) {
      if (selectedvehicle) {
        this.$emit('select:vehicle', {
          model: this.selectedvehicle.name,
          type: this.selectedvehicle.type,
          reg: this.selectedvehicle.reg
        })
      } else
        this.$emit('select:vehicle', {
          model: null,
          type: null,
          reg: null
        })
    },
    reset() {
      this.selectedvehicle = null
    }
  }
}
</script>
