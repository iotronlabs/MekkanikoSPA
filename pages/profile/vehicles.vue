<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h2 class="display-1">Saved Vehicles</h2>
        <v-sheet class="text-center mt-4" min-height="300">
          <VehicleComponent />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VehicleComponent from '@/components/user/VehicleComponent'

export default {
  components: {
    VehicleComponent
  },
  data() {
    return {}
  }
}
</script>