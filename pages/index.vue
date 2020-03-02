<template>
  <v-container fluid class="px-0 py-0">
    <v-carousel hide-delimiters height="400" dark class="mt-n12">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-overlay absolute opacity="0.5">
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="text-center white--text" cols="12">
              <h4 class="display-1 font-weight-thin mb-12">
                Book your Service
                <br />in 3 easy steps!
              </h4>
              <p class="overline mb-1">
                <v-icon class="mr-4">mdi-google-maps</v-icon>Select Location
              </p>
              <p class="overline mb-1">
                <v-icon class="mr-4">mdi-car-info</v-icon>Select Vehicle Model
              </p>
              <p class="overline mb-12">
                <v-icon class="mr-4">mdi-account-card-details</v-icon>Book with your details
              </p>
              <v-btn color="primary">Book Now</v-btn>
              <v-btn color="secondary">Learn More</v-btn>
            </v-col>
          </v-row>
        </v-overlay>
      </v-carousel-item>
    </v-carousel>
    <v-row no-gutters class="mt-n6">
      <v-col class="pa-1" cols="6" xs="12" sm="6" md="6" lg="3">
        <v-card
          elevation="5"
          min-height="200"
          height="100%"
          class="pb-6"
          align="center"
          style="border-radius: 0 20px 0 20px"
        >
          <v-card-subtitle
            class="title font-weight-bold px-0 primary--text"
            style="line-height:90%"
          >DOORSTEP &nbsp;PICKUP-DROP</v-card-subtitle>

          <v-card-subtitle
            class="pt-0 overline font-weight-medium"
          >Get your Vehicle serviced from the comforts of home.</v-card-subtitle>

          <v-img src="icons/route.png" width="64" />
        </v-card>
      </v-col>
      <v-col class="pa-1" cols="6" xs="12" sm="6" md="6" lg="3">
        <v-card
          elevation="5"
          min-height="200"
          height="100%"
          class="pb-6"
          align="center"
          style="border-radius: 20px 0 20px 0"
        >
          <v-card-subtitle
            class="title font-weight-bold px-0 primary--text"
            style="line-height:90%"
          >BREAKDOWN ASSISTANCE</v-card-subtitle>

          <v-card-subtitle
            class="pt-0 overline font-weight-medium"
          >No worries, We will send a mechanic to your location.</v-card-subtitle>

          <v-img src="icons/tow-truck.png" width="64" />
        </v-card>
      </v-col>
      <v-col class="pa-1" cols="6" xs="12" sm="6" md="6" lg="3">
        <v-card
          elevation="5"
          min-height="200"
          height="100%"
          class="pb-6"
          align="center"
          style="border-radius: 20px 0 20px 0"
        >
          <v-card-subtitle
            class="title font-weight-bold primary--text"
            style="line-height:90%"
          >MANAGE YOUR FLEET</v-card-subtitle>

          <v-card-subtitle
            class="pt-0 overline font-weight-medium"
          >Save vehicle details and book service in one click.</v-card-subtitle>

          <v-img src="icons/traffic.png" width="64" />
        </v-card>
      </v-col>
      <v-col class="pa-1" cols="6" xs="12" sm="6" md="6" lg="3">
        <v-card
          elevation="5"
          class="pb-6"
          min-height="200"
          height="100%"
          align="center"
          style="border-radius: 0 20px 0 20px"
        >
          <v-card-subtitle
            class="title font-weight-bold px-0 primary--text"
            style="line-height:90%"
          >WE BUILD RelationSHIPS</v-card-subtitle>

          <v-card-text
            class="pt-0 overline font-weight-medium"
          >Customer Satisfaction is the secret to success.</v-card-text>

          <v-img src="icons/handshake.png" width="64" />
        </v-card>
      </v-col>
    </v-row>

    <v-parallax height="400" dark src="bikeparal.jpg">
      <v-overlay absolute>
        <v-row no-gutters>
          <v-col class="text-center" cols="12">
            <h1 class="display-2 font-weight-thin mb-2">
              An all in one
              <strong>PLATFORM</strong> for your vehicles
            </h1>
            <h4 class="title">Book your Service in 3 easy steps!</h4>
            <p class="body-1 mb-0">1. Select Location</p>
            <p class="body-1 mb-0">2. Select Vehicle Model</p>
            <p class="body-1 mb-0">3. Book with your details</p>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>

    <v-row no-gutters class="mt-n12">
      <v-col class="pa-1">
        <v-card elevation="5" shaped min-height="200">
          <v-card-title class="ml-2 pb-0">Maintainance</v-card-title>

          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-subtitle class="pt-0 px-1">
                <ul>
                  <li>Engine and Performance</li>
                  <li>Battery and Electrical</li>
                  <li>Engine oil change</li>
                  <li>Brake Tuning</li>
                  <li>Chain and Sprocket Tuning</li>
                  <li>Vehicle Wash</li>
                </ul>
              </v-card-subtitle>
            </div>

            <div class="mr-3 mt-n4 text-center">
              <p class="mb-0 overline">starts from</p>
              <p class="display-3">₹499</p>
              <v-btn outlined>Book Now</v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col class="pa-1">
        <v-card elevation="5" shaped min-height="200">
          <v-card-title class="ml-2 pb-0">Repair Service</v-card-title>

          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-subtitle class="pt-0 px-1">
                <ul>
                  <li>Engine system</li>
                  <li>Transmission and Gearbox</li>
                  <li>Electrical and Battery</li>
                  <li>Suspension and Alignment</li>
                  <li>Oil filter change</li>
                  <li>Breaking system</li>
                </ul>
              </v-card-subtitle>
            </div>

            <div class="mr-3 mt-n4 text-center">
              <p class="mb-0 overline">starts from</p>
              <p class="display-3">₹499</p>
              <v-btn outlined>Book Now</v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col class="pa-1">
        <v-card elevation="5" shaped min-height="200">
          <v-card-title class="ml-2 pb-0">Wash & Polish</v-card-title>

          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-subtitle class="pt-0 px-1">
                <ul>
                  <li>Doorstep Wash</li>
                  <li>Waterjet Dirt Removal</li>
                  <li>Body Polish</li>
                  <li>Scratch Prevention</li>
                </ul>
              </v-card-subtitle>
            </div>

            <div class="mr-3 mt-n4 text-center">
              <p class="mb-0 overline">starts from</p>
              <p class="display-3">₹499</p>
              <v-btn outlined>Book Now</v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          src: 'bikepara.jpg'
        },
        {
          src: 'car.jpg'
        },
        {
          src: 'bike.jpg'
        }
      ]
      // default to Montreal to keep it simple
      // change this to whatever makes sense
    }
  },

  computed: {
    ...mapGetters({
      bikes: 'bikes'
    })
  },
  methods: {
    // receives a place object via the autocomplete component
  }
}
</script>