<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h2 class="display-1">Saved Locations</h2>

        <v-sheet class="text-center mt-4" min-height="300">
          <v-card-subtitle>You have no saved locations.</v-card-subtitle>
          <v-btn color="primary">
            Add Location
            <v-icon>mdi-map-marker-plus</v-icon>
          </v-btn>
          <v-row no-gutters class="mt-4">
            <v-col class="ma-2">
              <LocationComponent />
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LocationComponent from '@/components/user/LocationComponent'
export default {
  components: {
    LocationComponent
  }
}
</script>