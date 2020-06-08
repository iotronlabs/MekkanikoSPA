<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <h2 class="headline text-center">Saved Locations</h2>

        <v-sheet class="text-center mt-4" min-height="300">
          <v-tooltip v-model="show" bottom>
            <template v-slot:activator="{ on }">
              <MapComponent
                @update:location="selectedLocation"
                @update:address="selectedAddress"
                v-on="on"
              />
            </template>
            <span>Detect, search, or select location on map.</span>
          </v-tooltip>

          <v-btn color="primary" class="mt-5" @click="saveLocation()">
            Add Location
            <v-icon right>mdi-map-marker-plus</v-icon>
          </v-btn>
          <v-dialog v-model="dialog" persistent>
            <v-card>
              <v-col class="pa-2">
                <ValidationObserver ref="observer" v-slot="{ validate, reset }">
                  <form>
                    <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
                      <v-text-field
                        v-model="locationName"
                        :counter="10"
                        :error-messages="errors"
                        label="Name"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="Address" rules="required">
                      <v-textarea
                        label="Address"
                        auto-grow
                        v-model="bookingAddress"
                        :error-messages="errors"
                        required
                      />
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="City/Locality" rules="required">
                      <v-text-field
                        class="mx-1"
                        label="City/Locality"
                        v-model="bookingCity"
                        :error-messages="errors"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required|digits:6"
                      name="Pin Code"
                    >
                      <v-text-field
                        class="mx-1"
                        label="Pin Code"
                        v-model="bookingPinCode"
                        :error-messages="errors"
                        required
                      />
                    </ValidationProvider>
                    <v-toolbar>
                      <v-btn class="ma-1" small text @click="clear" :loading="isLoading">
                        <v-icon left>mdi-arrow-left</v-icon>Back
                      </v-btn>
                      <v-spacer />
                      <v-btn
                        color="green darken-1"
                        @click="submit"
                        outlined
                        :loading="isLoading"
                      >Save Location</v-btn>
                    </v-toolbar>
                  </form>
                </ValidationObserver>
              </v-col>
            </v-card>
          </v-dialog>

          <v-row no-gutters class="mt-2">
            <v-col class>
              <LocationComponent ref="useraddress" />
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

import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    LocationComponent,
    MapComponent,

    ValidationObserver
  },
  data() {
    return {
      show: false,
      dialog: false,
      isLoading: false,
      locationName: null,
      bookingAddress: null,
      bookingPinCode: null,
      bookingCity: null,
      currentLocation: null
      //  error: null
    }
  },
  mounted() {
    // this.initialize()
  },

  methods: {
    selectedLocation(data) {
      //console.log(data)
      this.currentLocation = data.location
    },
    selectedAddress(data) {
      // console.log(data)
      this.bookingAddress = data.details
      this.bookingPinCode = data.pin
      this.bookingCity = data.city
    },
    async saveLocation() {
      if (this.currentLocation) {
        this.dialog = true
      }
      //$(this.$refs.map).geolocate()
      else {
        ;(this.show = true),
          setTimeout(() => {
            this.show = false
          }, 3000)
      }
    },
    async submit() {
      if (await this.$refs.observer.validate()) {
        this.isLoading = true
        await this.$axios
          .$post('addresses', {
            name: this.locationName,
            address: this.bookingAddress,
            pincode: this.bookingPinCode,
            city: this.bookingCity,
            geolat: this.currentLocation.lat,
            geolng: this.currentLocation.lng
          })
          .then(response => {
            //console.log(response)
            this.$refs.useraddress.updateAddressList(response.data),
              (this.dialog = false),
              (this.isLoading = false),
              (this.locationName = null),
              (this.bookingAddress = null),
              (this.bookingPinCode = null),
              (this.bookingCity = null),
              this.$refs.observer.reset()
          })
          .catch(e => {
            console.log(e), (this.isLoading = false)
          })
      } else console.log('form not valid')
    },
    clear() {
      this.dialog = false
      this.$refs.observer.reset()
    }
  }
}
</script>
