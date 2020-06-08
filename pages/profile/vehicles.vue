<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h2 class="headline">Saved Vehicles</h2>
        <v-sheet class="text-center py-2">
          <VehicleList @update:vehicle="selectedVehicle" ref="list" />
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
  mounted() {
    // console.log(this.$refs)
  },
  methods: {
    selectedVehicle(data) {
      this.vehicleModel = data.model
      this.vehicleType = data.type
    },
    async saveVehicle() {
      let selected = this.$refs.list.checkError()
      if (selected && this.reg) {
        await this.$axios
          .$post('user/savedvehicle', {
            model_name: this.vehicleModel,
            vehicle_type: this.vehicleType,
            registration_number: this.reg
          })
          .then(response => {
            this.$refs.uservehicle.updateVehicleList(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      } else {
        this.vehicleModel = null
        this.vehicleType = null
      }
    }
  }
}
</script>
