<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h2 class="headline">Saved Vehicles</h2>
        <v-sheet class="text-center py-2">
          <VehicleList @update:vehicle="selectedVehicle" />
          <v-col>
            <v-text-field outlined label="Registration Number" v-model="reg" />
            {{ vehicleModel }}{{ vehicleType }}
            <v-btn color="primary" @click="saveVehicle()">Save Vehicle</v-btn>
          </v-col>
        </v-sheet>
        <VehicleComponent ref="uservehicle" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VehicleList from '@/components/service/VehicleList'
import VehicleComponent from '@/components/user/VehicleComponent'

export default {
  components: {
    VehicleComponent,
    VehicleList
  },
  data() {
    return {
      vehicleModel: null,
      vehicleType: null,
      reg: null
    }
  },
  methods: {
    selectedVehicle(data) {
      this.vehicleModel = data.model
      this.vehicleType = data.type
    },
    async saveVehicle() {
      let response = await this.$axios.$post('user/savedvehicle', {
        model_name: this.vehicleModel.text,
        vehicle_type: this.vehicleType,
        registration_number: this.reg
      })
      console.log(response)
      this.$refs.uservehicle.updateVehicleList(response.data)
    }
  }
}
</script>
