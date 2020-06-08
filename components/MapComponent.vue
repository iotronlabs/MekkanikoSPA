<template>
  <v-card>
    <v-row no-gutters>
      <v-toolbar>
        <!--    <gmap-autocomplete
                    class="px-1"
                    @place_changed="setPlace"
                    @click="addMarker"
                    style="width: 100%; height: 40px; border-color: indigo; border-style: solid;
  border-width: 1px; border-radius: 10px;"
        ></gmap-autocomplete>-->
        <v-autocomplete
          v-model="model"
          :items="places"
          :loading="isLoading"
          :search-input.sync="search"
          chips
          clearable
          hide-details
          hide-selected
          item-text="name"
          placeholder="Update Location"
          :allow-overflow="false"
          :cache-items="true"
          solo
          rounded
          dense
          @click:append-outer="geolocate()"
          append-outer-icon="mdi-crosshairs-gps"
          return-object
          append-icon="mdi-magnify"
        >
          <template slot="no-data">
            <v-list-item offset-y>
              <v-list-item-title>
                Search for a
                <strong>Place</strong>
              </v-list-item-title>
            </v-list-item>
          </template>
          <template slot="selection" slot-scope="{ item, selected }">
            <v-chip :input-value="selected" color="primary" @click.prevent="model=null">
              <v-icon left>mdi-map-marker</v-icon>
              <span v-text="item.name" class="text-truncate"></span>
            </v-chip>
          </template>
          <template slot="item" slot-scope="{ item }">
            <v-list-item-content @click.prevent="onPlaceChanged(item.placeID)">
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>
          </template>
        </v-autocomplete>
      </v-toolbar>
    </v-row>

    <gmap-map
      :center="center"
      :options="{
                  zoomControl: true,
                  mapTypeControl: false,
                  scaleControl: false,
                  streetViewControl: false,
                  rotateControl: true,
                  fullscreenControl: false,
                  disableDefaultUi: false
                }"
      ref="mapRef"
      :zoom="zoomLevel"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :position="currentMarker"
        @click="center = currentMarker"
        :clickable="true"
        :draggable="true"
        @dragend="gMapFunc($event.latLng)"
      ></gmap-marker>
    </gmap-map>
    <!-- <v-container fluid>
      <v-row no-gutters>
      </v-row>
    </v-container>-->
  </v-card>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'
export default {
  name: 'GoogleMap',

  data() {
    return {
      stepper: 1,
      // default to Kolkata to keep it simple
      // change this to whatever makes sense
      center: { lat: 22.5726, lng: 88.3639 },
      markers: [],
      currentMarker: { lat: 22.5726, lng: 88.3639 },
      places: [],
      currentPlace: Object,
      zoomLevel: 12,
      isLoading: false,
      place: null,
      model: null,
      search: null
    }
  },
  computed: {
    //google: gmapApi
  },
  created() {
    this.google = gmapApi
  },
  mounted() {
    //this.geolocate()
  },

  watch: {
    search(val) {
      if (!val) {
        return
      }

      this.isLoading = true

      let service = new google.maps.places.AutocompleteService()

      service.getPlacePredictions(
        {
          input: val,
          componentRestrictions: { country: 'IN' },

          location: new google.maps.LatLng(22.5726, 88.3639),
          radius: 5000
        },
        (predictions, status) => {
          if (status != google.maps.places.PlacesServiceStatus.OK) {
          }

          this.places = predictions.map(prediction => {
            return {
              id: prediction.id,
              name: prediction.description,
              placeID: prediction.place_id
            }
          })

          this.isLoading = false
        }
      )
    }
  },
  methods: {
    onPlaceChanged(placeId) {
      let self = this
      let geocoder = new google.maps.places.PlacesService(
        this.$refs.mapRef.$mapObject
      )

      geocoder.getDetails({ placeId: placeId }, function(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        }
        let marker = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
        self.setPlace(place)
        self.addMarker(marker)
        self.$emit('update:location', {
          location: marker
        })
      })
    },

    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place
      let address = place.address_components.reduce(
        (seed, { long_name, types }) => (
          types.forEach(t => (seed[t] = long_name)), seed
        )
      )
      console.log(address)
      let addressData = {}
      addressData.details = place.formatted_address
      addressData.pin = address.postal_code
      addressData.city = address.locality || address.long_name
      this.$emit('update:address', addressData)
    },
    addMarker(marker) {
      this.markers.push({ position: marker })

      this.currentMarker = marker
      this.center = marker
      this.zoomLevel = 16
      this.model = null
      //this.currentPlace = null
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        let marker = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.addMarker(marker)
        this.$emit('update:location', {
          location: marker
        })
      })
    },
    gMapFunc(evnt) {
      let marker = { lat: evnt.lat(), lng: evnt.lng() }
      this.addMarker(marker)
      this.$emit('update:location', {
        location: marker
      })
    }
  }
}
</script>