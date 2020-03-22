<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h2 class="display-1">Saved Locations</h2>

        <v-sheet class="text-center mt-4" min-height="300">
          <v-card-subtitle>You have no saved locations.</v-card-subtitle>
          <v-dialog v-model="dialog" persistent fullscreen>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" v-on="on">
                Add Location
                <v-icon right>mdi-map-marker-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-btn class="ma-1" small outlined @click="dialog=false">
                <v-icon left>mdi-arrow-left</v-icon>Back
              </v-btn>

              <MapComponent />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

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
import MapComponent from '@/components/MapComponent'
export default {
  components: {
    LocationComponent,
    MapComponent
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>