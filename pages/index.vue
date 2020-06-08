<template>
  <v-container fluid class="px-0 py-0">
    <v-row no-gutters class="d-flex justify-center">
      <v-col lg="3" class="text-center d-flex flex-column justify-center">
        <v-carousel
          cycle
          continuous
          height="40"
          interval="2000"
          hide-delimiter-background
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row class="fill-height" align="center" justify="center" no-gutters>
              <p class="mb-2 overline">
                <v-icon class="mr-1" color="secondary" size="30">{{ slide.icon }}</v-icon>
                {{ slide.text }}
              </p>
            </v-row>
          </v-carousel-item>
        </v-carousel>

        <h1 class="headline font-weight-medium landing-font">
          Service your vehicle in
          <br />
          <p class="race-font secondary--text">3 easy steps!</p>
        </h1>

        <div style="z-index: 100;">
          <v-btn class="grad-button" dark rounded :to="{ path: 'service' }">Book Now</v-btn>
          <v-btn color="secondary" rounded :to="{ path: '/', hash: 'services' }" outlined>Learn More</v-btn>
        </div>
      </v-col>
      <v-col lg="6">
        <div class="floating mx-auto">
          <v-img
            :src="require('@/assets/img/landing2.png?webp')"
            min-height="350"
            max-height="500"
            class="mt-n12"
            contain
          ></v-img>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters class="d-flex justify-center mt-n6">
      <v-col class="pa-1" cols="6" xs="12" sm="5" md="5" lg="2">
        <v-card
          elevation="5"
          min-height="200"
          height="100%"
          class="pb-6 d-flex flex-wrap text-center nucard"
          style="border-radius: 0 20px 0 20px"
        >
          <v-card-title
            class="subtitle-1 font-weight-bold px-1 mx-auto primary--text"
            style="line-height:90%"
          >
            DOORSTEP
            <br />PICKUP-DROP
          </v-card-title>

          <v-card-text
            class="pt-0 mx-auto overline font-weight-medium"
          >Get your Vehicle serviced from the comforts of home.</v-card-text>

          <img :src="require('@/assets/cards/car-breakdown.svg')" width="64" class="mx-auto" />
        </v-card>
      </v-col>
      <v-col class="pa-1" cols="6" xs="12" sm="5" md="5" lg="2">
        <v-card
          elevation="5"
          min-height="200"
          height="100%"
          class="pb-6 d-flex flex-wrap text-center nucard"
          style="border-radius: 20px 0 20px 0"
        >
          <v-card-title
            class="subtitle-1 font-weight-bold px-1 mx-auto primary--text"
            style="line-height:90%"
          >
            BREAKDOWN
            <br />ASSISTANCE
          </v-card-title>

          <v-card-text
            class="pt-0 overline mx-auto font-weight-medium"
          >No worries, We will send a mechanic to your location.</v-card-text>

          <img :src="require('@/assets/cards/tow.svg')" width="64" class="mx-auto" />
        </v-card>
      </v-col>
      <v-col class="pa-1" cols="6" xs="12" sm="5" md="5" lg="2">
        <v-card
          elevation="5"
          min-height="200"
          height="100%"
          class="pb-6 d-flex flex-wrap text-center nucard"
          style="border-radius: 20px 0 20px 0"
        >
          <v-card-title
            class="subtitle-1 font-weight-bold mx-auto primary--text px-1"
            style="line-height:90%"
          >
            MANAGE
            <br />YOUR FLEET
          </v-card-title>

          <v-card-text
            class="pt-0 mx-auto overline font-weight-medium"
            style="width: 100%;"
          >Save vehicle details and book service in one click.</v-card-text>

          <img :src="require('@/assets/cards/auto.svg')" width="64" class="mx-auto" />
        </v-card>
      </v-col>
      <v-col class="pa-1" cols="6" xs="12" sm="5" md="5" lg="2">
        <v-card
          elevation="5"
          class="pb-6 d-flex flex-wrap text-center nucard"
          min-height="200"
          height="100%"
          style="border-radius: 0 20px 0 20px"
        >
          <v-card-title
            class="subtitle-1 font-weight-bold px-1 mx-auto primary--text"
            style="line-height:90%"
          >
            WE BUILD
            <br />RelationSHIPS
          </v-card-title>

          <v-card-text
            class="pt-0 overline mx-auto font-weight-medium"
          >Customer Satisfaction is the secret to our success.</v-card-text>

          <img :src="require('@/assets/cards/car.svg')" width="64" height="64" class="mx-auto" />
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mx-2 my-2" />

    <v-row no-gutters class id="services">
      <h1 class="race-font font-weight-thin primary--text mx-auto mb-2">Our Services</h1>
      <v-tabs centered icons-and-text style="border-radius: 30px 30px 0 0">
        <v-tab>
          Bikes
          <v-icon>mdi-bike-fast</v-icon>
        </v-tab>

        <v-tab>
          Cars
          <v-icon>mdi-car-sports</v-icon>
        </v-tab>
        <v-tab-item>
          <v-col cols="12" lg="10" md="10" class="mx-auto pa-1">
            <v-row no-gutters class="d-flex justify-center">
              <v-col
                class="pa-1"
                v-for="service in bikeservice"
                :key="service.title"
                cols="12"
                lg="3"
                md="6"
                sm="6"
              >
                <v-card
                  elevation="10"
                  style="border-radius: 20px;"
                  min-height="200"
                  class="nucard pb-4"
                >
                  <v-card-subtitle class="mb-0 pb-0 subtitle-2 text-uppercase text-center">
                    starts from
                    <p class="my-0 display-2 success--text">₹{{service.price}}/-</p>
                  </v-card-subtitle>

                  <v-card-title
                    class="subtitle-1 secondary--text text-uppercase"
                  >{{ service.title }}</v-card-title>

                  <v-card-subtitle class="pt-0 px-1 subtitle-2">
                    <ul>
                      <li v-for="feature in service.features" :key="feature">
                        <v-icon color="success">mdi-shield-check-outline</v-icon>
                        {{ feature }}
                      </li>
                    </ul>
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn rounded class="grad-button mx-auto" dark>Book Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-tab-item>
        <v-tab-item>
          <v-col cols="12" lg="10" md="10" class="mx-auto pa-1">
            <v-row no-gutters class="d-flex justify-center">
              <v-col
                class="pa-1"
                v-for="service in carservice"
                :key="service.title"
                cols="12"
                lg="3"
                md="6"
                sm="6"
              >
                <v-card
                  elevation="10"
                  style="border-radius: 20px;"
                  min-height="200"
                  class="nucard pb-4"
                >
                  <v-card-subtitle class="mb-0 pb-0 subtitle-2 text-uppercase text-center">
                    starts from
                    <p class="my-0 display-2 success--text">₹{{service.price}}/-</p>
                  </v-card-subtitle>

                  <v-card-title
                    class="subtitle-1 secondary--text text-uppercase"
                  >{{ service.title }}</v-card-title>

                  <v-card-subtitle class="pt-0 px-1 subtitle-2">
                    <ul>
                      <li v-for="feature in service.features" :key="feature">
                        <v-icon color="success">mdi-shield-check-outline</v-icon>
                        {{ feature }}
                      </li>
                    </ul>
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn rounded class="grad-button mx-auto" dark>Book Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-tab-item>
      </v-tabs>
    </v-row>
    <v-parallax
      height="420"
      dark
      :src="require('@/assets/img/bikeparal.jpg?webp')"
      style="border-radius:0 0 20px 20px;"
    >
      <v-overlay absolute opacity="0.6">
        <v-row no-gutters>
          <v-col class="mx-auto text-center" cols="10" lg="8">
            <h1 class="font-weight-thin mb-2 race-font">About US</h1>

            <p class="subtitle-2 mb-0">
              A complete doorstep vehicle maintainance and service solution,
              seamlessly integrated with multiple service partners. We want to
              make vehicles safer both for you and the environment. One of the
              reasons maintenance is ignored is the stressful process of
              servicing a vehicle. We solved this issue by going ahead and
              partnering with the most reliable service stations in the city and
              created a maintenance platform, designed to help you service your
              vehicle without stepping out while keeping all your service
              records in one place.
            </p>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <h1 class="race-font font-weight-thin text-center primary--text mt-6">Brands Serviced</h1>
    <v-row no-gutters>
      <v-col cols="12" lg="10" class="mx-auto">
        <div class="carousel-wrapper">
          <VueSlickCarousel v-bind="slickOptions">
            <v-col v-for="i in 14" :key="i" class="img-wrapper">
              <v-img :src="require(`@/assets/brands/brand${i}.jpg`)" width="100" class="mx-auto" />
            </v-col>
          </VueSlickCarousel>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      slides: [
        {
          icon: 'mdi-google-maps',
          text: 'Select Location'
        },
        {
          icon: 'mdi-shield-car',
          text: 'Select Vehicle Model'
        },
        {
          icon: 'mdi-card-account-details-star',
          text: 'Book with your details'
        }
      ],

      slickOptions: {
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        rows: 2
      },
      imgSrc: null
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      bikeservice: 'service/bikeservice',
      carservice: 'service/carservice'
    })
    //  brandSliderSource() {
    //  console.log()
    // return require(`@/assets/brands/brand1.jpg`)
    //  }
  },
  methods: {}
}
</script>
<style>
.race-font {
  font-family: 'Faster One', cursive;
  font-size: 2rem;
}
.grad-button {
  background-image: linear-gradient(180deg, #97abff 10%, #123597 100%);
}

.carousel-wrapper {
  padding: 20px;
}
.v-application.theme--light .nucard {
  transition: background 0.1s, color 0.1s;
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.2),
    rgba(255, 255, 255, 0.3)
  );
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5) !important;
}

.v-application.theme--dark .nucard {
  transition: background 0.1s, color 0.1s;
  background: linear-gradient(135deg, #3e4047, #17171a);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7),
    -5px -5px 10px rgba(255, 255, 255, 0.1);
}
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}
</style>
