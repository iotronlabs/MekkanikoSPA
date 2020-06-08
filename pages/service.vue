<template>
  <v-container class="px-0 py-0">
    <v-row no-gutters>
      <v-col>
        <v-stepper v-model="stepper">
          <v-stepper-header>
            <v-stepper-step step="1" class="py-0" :complete="stepper > 1">Add Location</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" class="py-0" :complete="stepper > 2">Select Model</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" class="py-0" :complete="stepper > 3">Add Details</v-stepper-step>
          </v-stepper-header>
          <transition name="fade">
            <v-stepper-content step="1" class="pa-0">
              <VehicleList @update:vehicle="selectedVehicle" ref="list" />
              <v-divider class="ma-2" />
              <h1 class="title text-center">Saved Vehicles</h1>

              <VehicleComponent @select:vehicle="savedVehicle" ref="savedVehicle" />

              <v-app-bar extended extension-height="25" bottom fixed>
                <v-row>
                  <h3
                    v-if="vehicleModel == null"
                    class="subtitle-1 mx-auto mt-4"
                  >Select your vehicle model to</h3>

                  <h3
                    class="subtitle-1 success--text mx-auto mt-4"
                    v-if="vehicleModel "
                  >Model: {{vehicleModel}} - {{vehicleType}}</h3>

                  <v-btn
                    class
                    color="primary"
                    block
                    :disabled="!vehicleModel"
                    @click="updateVehicle()"
                  >Continue</v-btn>
                </v-row>
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
              <v-btn color="primary" class="mt-2" block @click="dialog = true">
                Add from Saved locations
                <v-icon right>mdi-map-marker-plus</v-icon>
              </v-btn>
              <v-dialog v-model="dialog">
                <LocationComponent
                  @select:address="selectedAddress"
                  @select:location="selectedLocation"
                />
              </v-dialog>

              <v-row no-gutters class="pa-2" style="width:100%">
                <v-card :loading="isLoading" width="100%" class="text-center">
                  <h1 class="subtitle-2 my-4 warning--text" v-if="!storeAvailable">
                    <v-icon class="mr-2" color="warning">mdi-garage-alert</v-icon>Sorry, No garages available nearby.
                  </h1>
                  <h1 class="subtitle-2 my-4 success--text" v-else-if="(stores.length = 1)">
                    {{ stores.length }} {{ vehicleType }} garage is available
                    nearby.
                  </h1>
                  <h1 class="subtitle-2 my-4 success--text" v-else-if="stores.length > 1">
                    {{ stores.length }} {{ vehicleType }} garages are available
                    nearby
                  </h1>
                  <v-row no-gutters v-if="storeAvailable">
                    <v-col cols="6" v-for="store in stores" :key="store.id">
                      <v-card class="ma-2" outlined>
                        <v-card-subtitle>{{ store.name }}</v-card-subtitle>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>

              <v-app-bar bottom fixed>
                <v-btn text min-width="50%" @click="stepper = 1">
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
                <ValidationObserver
                  ref="observer"
                  v-slot="{ valid, validate, reset }"
                  style="width:100%"
                >
                  <form>
                    <ValidationProvider v-slot="{ errors }" name="Date" rules="required">
                      <v-text-field
                        v-model="bookingDate"
                        label="Schedule Pick-up"
                        prepend-icon="mdi-calendar-blank"
                        readonly
                        :error-messages="errors"
                        required
                        @click="dateModal = true"
                      ></v-text-field>
                      <DatePicker @update:date="selectedDate" :modal="dateModal" />
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="Service" rules="required">
                      <v-select
                        v-if="vehicleType == 'bike'"
                        label="Select service"
                        v-model="serviceSelected"
                        :items="bikeservice"
                        color="secondary"
                        return-object
                        :error-messages="errors"
                        :success="valid"
                      />
                      <v-select
                        label="Select service"
                        v-else-if="vehicleType == 'car'"
                        v-model="serviceSelected"
                        :items="carservice"
                        color="secondary"
                        return-object
                        :error-messages="errors"
                        :success="valid"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Contact number"
                      rules="required|digits:10"
                    >
                      <v-text-field
                        color="secondary"
                        label="Contact Number"
                        v-model="contactNumber"
                        :error-messages="errors"
                        :success="valid"
                      />
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="Reg number" rules="required">
                      <v-text-field
                        color="secondary"
                        label="Vehicle Registration Number"
                        v-model="vehicleReg"
                        :error-messages="errors"
                        :success="valid"
                      />
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="Address" rules="required">
                      <v-textarea
                        label="Address"
                        auto-grow
                        v-model="bookingAddress"
                        :error-messages="errors"
                        required
                        :success="valid"
                      />
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="City/Locality" rules="required">
                      <v-text-field
                        class="mx-1"
                        label="City/Locality"
                        v-model="bookingCity"
                        :error-messages="errors"
                        required
                        :success="valid"
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
                        :success="valid"
                      />
                    </ValidationProvider>
                    <v-app-bar bottom fixed>
                      <v-btn text min-width="50%" @click="stepper = 2">
                        <v-icon left>mdi-arrow-left</v-icon>Back
                      </v-btn>
                      <v-btn color="primary" @click="submit" min-width="50%">BOOK</v-btn>
                    </v-app-bar>
                  </form>
                </ValidationObserver>
                <v-row no-gutters>
                  <v-card outlined width="100%">
                    <v-card-title>Selected vehicle</v-card-title>

                    <v-card-subtitle>
                      Model: {{ vehicleModel }} - Type:
                      {{ vehicleType }}
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn @click="stepper = 1">Change</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-row>
              </v-row>
            </v-card>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import LocationComponent from '@/components/user/LocationComponent'
import MapComponent from '@/components/MapComponent'
import VehicleComponent from '@/components/user/VehicleComponent'
import VehicleList from '@/components/service/VehicleList'
import DatePicker from '@/components/service/DatePicker'

import { ValidationObserver } from 'vee-validate'

export default {
  // middleware: 'auth-user',
  data() {
    return {
      stepper: 1,
      isLoading: false,
      dateModal: false,
      dialog: false,
      vehicleModel: null,
      vehicleType: null,
      vehicleReg: null,
      serviceSelected: null,
      currentLocation: null,
      storeAvailable: false,
      stores: [],
      bookingDate: null,
      contactNumber: null,
      bookingAddress: null,
      bookingPinCode: null,
      bookingCity: null
    }
  },
  mounted() {
    // console.log(this.$refs)
  },
  components: {
    ValidationObserver,

    VehicleComponent,
    MapComponent,
    VehicleList,
    DatePicker,
    LocationComponent
  },
  methods: {
    updateVehicle() {
      // console.log(this.$refs)
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
      if (this.vehicleModel && this.vehicleType) {
        return true
      } else return this.$refs.list.checkError()
    },
    selectedVehicle(data) {
      this.vehicleModel = data.model
      this.vehicleType = data.type
      this.$refs.savedVehicle.reset()
    },
    savedVehicle(data) {
      this.vehicleModel = data.model
      this.vehicleType = data.type
      this.vehicleReg = data.reg ? data.reg : null
      this.$refs.list.reset()
    },
    //from Map component
    selectedLocation(data) {
      this.currentLocation = data.location
      this.$refs.map.addMarker(data.location)
      this.getStores(data.location, this.vehicleType)
    },
    async getStores(location, vehicleType) {
      if (location && vehicleType) {
        this.isLoading = true
        await this.$axios
          .$post('getmarker/' + vehicleType, location)
          .then(response => {
            if (response.data.length > 0) {
              this.stores = response.data
              this.storeAvailable = true
              this.isLoading = false
            } else {
              ;(this.stores = []),
                (this.storeAvailable = false),
                (this.isLoading = false)
            }
          })
          .catch(e => {
            console.log(e)
          })
      } else console.log('Select vehicle model or location')
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
      this.dateModal = false
      // console.log(data)
    },
    selectedAddress(data) {
      // console.log(data)
      this.bookingAddress = data.details
      this.bookingPinCode = data.pin
      this.bookingCity = data.city
      this.dialog = false
    },
    async submit() {
      if (await this.$refs.observer.validate()) {
        this.isLoading = true
        console.log('valid')
        await this.$axios
          .$post('user/order', {
            vehiclemodel: this.vehicleModel,
            type: this.vehicleType,
            reg: this.vehicleReg,
            schedule: this.bookingDate,
            contact: this.contactNumber,
            address: this.bookingAddress,
            pincode: this.bookingPinCode,
            city: this.bookingCity,
            geolat: this.currentLocation.lat,
            geolng: this.currentLocation.lng,
            service: this.serviceSelected.text
          })
          .then(response => {
            console.log(response)

            this.$refs.observer.reset()
          })
          .catch(e => {
            console.log(e), (this.isLoading = false)
          })
      } else console.log('form not valid')
    },
    clear() {
      this.$refs.observer.reset()
    }
  },
  computed: {
    ...mapGetters({
      bikeservice: 'service/bikeservice',
      carservice: 'service/carservice'
    })
  }
}
</script>
<style></style>
