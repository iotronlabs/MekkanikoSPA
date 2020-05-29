<template>
  <v-tabs v-model="type" fixed-tabs icons-and-text>
    <v-tab
      class="subtitle-2"
      v-for="i in vehicleType"
      :key="i.type"
      @change="selectedVehicle=null, selectedType=null"
    >
      {{i.label}}
      <v-icon>{{i.icon}}</v-icon>
    </v-tab>
    <v-tabs-items v-model="type">
      <v-tab-item v-for="i in vehicleType" :key="i.type">
        <v-col>
          <v-select
            label="Select model"
            v-model="selectedVehicle"
            @change="updateVehicle(i.type)"
            return-object
            :items="bikes"
            v-if="i.type=='bike'"
            outlined
            hide-details="auto"
            dense
            :error-messages="error"
          ></v-select>
          <v-select
            label="Select model"
            v-model="selectedVehicle"
            @change="updateVehicle(i.type)"
            return-object
            :items="cars"
            v-if="i.type=='car'"
            outlined
            hide-details="auto"
            dense
            :error-messages="error"
          ></v-select>
        </v-col>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      selectedVehicle: null,
      type: null,
      selectedType: null,
      vehicleType: [
        { type: 'bike', label: 'Two-wheeler', icon: 'mdi-bike-fast' },
        { type: 'car', label: 'Four-Wheeler', icon: 'mdi-car-sports' }
      ],
      error: null
    }
  },
  mounted() {
    this.initialize()
  },

  computed: {
    ...mapGetters({
      bikes: 'bikes',
      cars: 'cars'
    })
  },
  methods: {
    ...mapActions(['getVehicles']),
    async initialize() {
      await this.getVehicles()
    },
    updateVehicle(type) {
      this.selectedType = type
      this.$emit('update:vehicle', {
        model: this.selectedVehicle,
        type: this.selectedType
      })
      this.error = null
    },
    checkError() {
      if (this.selectedType && this.selectedVehicle) {
        return true
      } else {
        this.error = 'Vehicle not selected!'
        return false
      }
    }
  }
}
</script>