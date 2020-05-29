<template>
  <v-container class="px-0 py-0">
    <v-row no-gutters>
      <v-col>
        <v-stepper v-model="stepper">
          <v-stepper-header>
            <v-stepper-step step="1" class="py-0" :complete="stepper>1">Add Location</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" class="py-0" :complete="stepper>2">Select Model</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" class="py-0" :complete="stepper>3">Add Details</v-stepper-step>
          </v-stepper-header>
          <transition name="fade">
            <v-stepper-content step="1" class="pa-0">
              <VehicleList @update:vehicle="selectedVehicle" ref="list" />
              <v-divider class="ma-2" />
              <h1 class="title text-center">Saved Vehicles</h1>
              <v-sheet class="ma-2 pa-2">
                <h1 class="subtitle-1 text-center">There are no saved Vehicles</h1>

                <v-row no-gutters>
                  <v-col class="pa-1"></v-col>
                </v-row>
              </v-sheet>
              <v-app-bar bottom fixed>
                <v-btn color="primary" block @click="updateVehicle()">Continue</v-btn>
              </v-app-bar>
            </v-stepper-content>
          </transition>
          <transition name="fade">
            <v-stepper-content step="2" class="pa-0">
              <MapComponent
                @update:location="selectedLocation"
                @update:address="selectedAddress"
                ref="map"
              />
              <v-row no-gutters class="pa-2" style="width:100%">
                <v-card :loading="isLoading" width="100%" class="text-center">
                  <h1 class="subtitle-2 my-4 warning--text" v-if="!storeAvailable">
                    <v-icon class="mr-2" color="warning">mdi-garage-alert</v-icon>Sorry, No garages available nearby.
                  </h1>
                  <h1
                    class="subtitle-2 my-4 success--text"
                    v-else-if="stores.length = 1"
                  >{{stores.length}} {{vehicleType}} garage is available nearby.</h1>
                  <h1
                    class="subtitle-2 my-4 success--text"
                    v-else-if="stores.length > 1"
                  >{{stores.length}} {{vehicleType}} garages are available nearby</h1>
                  <v-row no-gutters v-if="storeAvailable">
                    <v-col cols="6" v-for="store in stores" :key="store.id">
                      <v-card class="ma-2" outlined>
                        <v-card-subtitle>{{store.name}}</v-card-subtitle>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>

              <v-app-bar bottom fixed>
                <v-btn text min-width="50%" @click="stepper=1">
                  <v-icon left>mdi-arrow-left</v-icon>Back
                </v-btn>
                <v-btn
                  color="primary"
                  :disabled="!storeAvailable"
                  @click="checkStore()"
                  min-width="50%"
                >Continue</v-btn>
              </v-app-bar>
            </v-stepper-content>
          </transition>

          <v-stepper-content step="3" class="pa-0">
            <v-card class="ma-2">
              <v-row no-gutters class="pa-2">
                <DatePicker @update:date="selectedDate" />
                <v-text-field outlined label="Contact Number" />
                <v-textarea label="Address" auto-grow :value="bookingAddress" />

                <v-text-field class="mx-1" label="City/Locality" :value="bookingCity"></v-text-field>
                <v-text-field class="mx-1" label="Pin Code" :value="bookingPinCode" />
                <v-row no-gutters>
                  <v-card outlined width="100%">
                    <v-card-title>Selected vehicle</v-card-title>

                    <v-card-subtitle>Model: {{vehicleModel}} - Type: {{vehicleType}}</v-card-subtitle>

                    <v-card-actions>
                      <v-btn @click="stepper=1">Change</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-row>
              </v-row>
            </v-card>
            <v-app-bar bottom fixed>
              <v-btn text min-width="50%" @click="stepper=2">
                <v-icon left>mdi-arrow-left</v-icon>Back
              </v-btn>
              <v-btn color="primary" @click="checkStore" min-width="50%">BOOK</v-btn>
            </v-app-bar>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MapComponent from '@/components/MapComponent'
import VehicleList from '@/components/service/VehicleList'
import DatePicker from '@/components/service/DatePicker'

export default {
  middleware: 'auth-user',
  data() {
    return {
      stepper: 1,
      isLoading: false,
      vehicleModel: null,
      vehicleType: null,
      currentLocation: null,
      storeAvailable: false,
      stores: [],
      bookingDate: null,
      bookingAddress: null,
      bookingPinCode: null,
      bookingCity: null
    }
  },
  components: {
    MapComponent,
    VehicleList,
    DatePicker
  },
  methods: {
    updateVehicle() {
      let selected = this.checkSelected()

      if (selected) {
        this.stepper = 2
        if (this.currentLocation) {
          this.getStores(this.currentLocation, this.vehicleType)
        } else {
          this.$refs.map.geolocate()
          this.getStores(this.currentLocation, this.vehicleType)
        }
      } else {
        ;(this.vehicleModel = null), (this.vehicleType = null)
      }
    },
    //from VehicleList component
    checkSelected() {
      return this.$refs.list.checkError()
    },
    selectedVehicle(data) {
      this.vehicleModel = data.model.text
      this.vehicleType = data.type
    },
    //from Map component
    selectedLocation(data) {
      this.currentLocation = data.location
      this.getStores(data.location, this.vehicleType)
    },
    async getStores(location, vehicleType) {
      if (location && vehicleType) {
        this.isLoading = true
        let response = await this.$axios.$post(
          'getmarker/' + vehicleType,
          location
        )

        if (response.data.length > 0) {
          this.stores = response.data
          this.storeAvailable = true
          this.isLoading = false
        } else {
          ;(this.stores = []),
            (this.storeAvailable = false),
            (this.isLoading = false)
        }
      } else console.log('Select vehicle model or location')

      // console.log(response.data)
      //  console.log(vehicleType)
    },
    checkStore() {
      if (this.storeAvailable) {
        console.log('store available')
        this.stepper = 3
      } else {
        console.log('no store at your location')
      }
    },
    selectedDate(data) {
      this.bookingDate = data
      console.log(data)
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
<style>
</style>