<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h2 class="headline">Saved Locations</h2>

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
              <v-toolbar>
                <v-btn class="ma-1" small text @click="dialog=false">
                  <v-icon left>mdi-arrow-left</v-icon>Back
                </v-btn>
                <v-spacer />
                <v-btn color="green darken-1" outlined @click="dialog = false">Save Location</v-btn>
              </v-toolbar>
              <MapComponent @update:location="selectedLocation" @update:address="selectedAddress" />
              <v-col class="pa-2">
                <v-textarea label="Address" auto-grow :value="bookingAddress" />
                <v-text-field class="mx-1" label="City/Locality" :value="bookingCity"></v-text-field>
                <v-text-field class="mx-1" label="Pin Code" :value="bookingPinCode" />
              </v-col>
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
      dialog: false,
      bookingAddress: null,
      bookingPinCode: null,
      bookingCity: null,
      currentLocation: null
    }
  },
  methods: {
    selectedLocation(data) {
      console.log(data)
      //  this.currentLocation = data.location
    },
    selectedAddress(place) {
      let address = place.address_components.reduce(
        (seed, { long_name, types }) => (
          types.forEach(t => (seed[t] = long_name)), seed
        )
      )
      console.log(address)
      this.bookingAddress = place.formatted_address
      this.bookingPinCode = address.postal_code
      this.bookingCity = address.locality
    }
  }
}
</script>