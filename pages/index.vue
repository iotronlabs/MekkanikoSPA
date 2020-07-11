<template>
  <v-container fluid class="px-0 py-0">
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" lg="3" class="text-center d-flex flex-column justify-center">
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
          <p class="display-1 font-weight-medium text-uppercase secondary--text">3 easy steps!</p>
        </h1>

        <div style="z-index: 100;">
          <v-btn class="grad-button" dark rounded :to="{ path: 'service' }">Book Now</v-btn>
          <v-btn color="secondary" rounded :to="{ path: '/', hash: 'services' }" outlined>Learn More</v-btn>
        </div>
      </v-col>
      <v-col cols="12" lg="6">
        <div class="floating mx-auto">
          <v-img
            :src="require('@/assets/img/landing2.png?webp')"
            alt="mekkaniko illustration"
            min-height="350"
            max-height="500"
            class="mt-n12"
            contain
            eager
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

          <v-img
            :src="require('@/assets/cards/car-breakdown.svg')"
            alt="breakdown"
            contain
            width="64"
            height="64"
            class="mx-auto"
          />
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

          <v-img
            :src="require('@/assets/cards/tow.svg')"
            alt="tow"
            contain
            width="64"
            height="64"
            class="mx-auto"
          />
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

          <v-img
            :src="require('@/assets/cards/auto.svg')"
            alt="fleet"
            contain
            width="64"
            height="64"
            class="mx-auto"
          />
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

          <v-img
            alt="customer relation"
            contain
            :src="require('@/assets/cards/car.svg')"
            width="64"
            height="64"
            class="mx-auto"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mx-2 my-4" />
    <v-lazy>
      <v-row no-gutters class id="services">
        <h1
          class="font-weight-medium display-1 text-uppercase primary--text mx-auto mb-2"
        >Our Services</h1>
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
                      class="subtitle-1 secondary--text text-uppercase font-weight-medium"
                    >Bike | {{ service.text }}</v-card-title>

                    <v-card-subtitle class="pt-0 px-1 subtitle-2">
                      <ul>
                        <li v-for="feature in service.features" :key="feature">
                          <v-icon color="success">mdi-shield-check-outline</v-icon>
                          {{ feature }}
                        </li>
                      </ul>
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn rounded class="grad-button mx-auto px-4" dark to="service">Book Now</v-btn>
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
                      class="subtitle-1 secondary--text text-uppercase font-weight-medium"
                    >car | {{ service.text }}</v-card-title>

                    <v-card-subtitle class="pt-0 px-1 subtitle-2">
                      <ul>
                        <li v-for="feature in service.features" :key="feature">
                          <v-icon color="success">mdi-shield-check-outline</v-icon>
                          {{ feature }}
                        </li>
                      </ul>
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn rounded class="grad-button mx-auto px-4" dark to="service">Book Now</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </v-lazy>

    <v-divider class="mx-2 my-4" />

    <v-row no-gutters class="d-flex justify-center">
      <v-col class="text-center px-2" cols="12" lg="6" md="6">
        <v-parallax
          dark
          :src="require('@/assets/img/bikeparal.jpg?webp')"
          style="border-radius:20px;"
          class
        >
          <v-overlay absolute opacity="0.6">
            <h1 class="font-weight-medium display-1 text-uppercase mb-2">About US</h1>
            <v-divider class="mx-2 my-4" />
            <p class="subtitle-2 mb-0 mx-10">
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
          </v-overlay>
        </v-parallax>
      </v-col>

      <!--  <v-col cols="12" lg="4" md="4" class="px-2">
        <h1
          class="mt-4 display-1 font-weight-medium primary--text text-center text-uppercase"
        >Reviews</h1>
        <v-divider class="mx-2 my-4" />
        <v-carousel
          cycle
          continuous
          interval="4000"
          hide-delimiter-background
          hide-delimiters
          :show-arrows="false"
          height="350px"
        >
          <v-carousel-item v-for="(review, i) in reviews" :key="i">
            <v-row no-gutters>
              <v-card
                class="mx-auto elevation-20 mt-6"
                color="primary"
                dark
                style="max-width: 400px;"
              >
                <v-row>
                  <v-col cols="6">
                    <v-card-subtitle>
                      <v-icon
                        size="50"
                        style="opacity: 0.4;"
                        class="mt-n8"
                      >mdi-format-quote-open-outline</v-icon>
                      {{review.text}}
                      <br />
                      <v-icon size="50" style="opacity: 0.4;" class>mdi-format-quote-close-outline</v-icon>
                      <br />
                      <p class="subtitle-2 font-weight-medium">-{{review.name}}</p>
                    </v-card-subtitle>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      class="mt-n8"
                      contain
                      width="160px"
                      height="125px"
                      :src="require(`@/assets/img/review${i}.jpg`)"
                    ></v-img>
                  </v-col>
                </v-row>

                <v-divider dark></v-divider>
                <v-card-actions class="pa-4">
                  {{review.vehicle}}
                  <v-spacer></v-spacer>
                  <span class="grey--text text--lighten-2 caption mr-2">({{ rating }})</span>
                  <v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    readonly
                    size="18"
                  ></v-rating>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      -->
    </v-row>
    <v-divider class="mx-2 my-4" />

    <v-row no-gutters>
      <h1 class="font-weight-medium display-1 text-uppercase mx-auto primary--text">Brands Serviced</h1>
      <v-col cols="12" lg="10" class="mx-auto mb-4">
        <!--   <div class="carousel-wrapper">
          <VueSlickCarousel v-bind="slickOptions">
            <v-col v-for="i in 14" :key="i" class="img-wrapper">
              <v-img :src="require(`@/assets/brands/brand${i}.jpg`)" width="100" class="mx-auto" />
            </v-col>
          </VueSlickCarousel>
        </div>-->
      </v-col>
    </v-row>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      fixed
      direction="top"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="primary" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-chat-processing</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green" href="https://wa.me/+918250529183">
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" href="mailto:contact@mekkaniko.com">
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" href="tel:8250529183">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      slides: [
        {
          icon: 'mdi-shield-car',
          text: 'Select Vehicle Model'
        },
        {
          icon: 'mdi-google-maps',
          text: 'Select Location'
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
      fab: false,
      rating: 4.5,
      reviews: [
        {
          name: 'Modi Sarkar',
          text: 'Ghar Ghar Modi, har har modi, aur kuch nei dorkar',
          vehicle: 'Land Rover'
        },
        {
          name: 'Ma mati manush',
          text: 'E deshe te corona hole uriye debe like fanush',
          vehicle: 'Jaguar'
        },
        {
          name: 'Muffler Man',
          text: 'Are PM pore hobi, age thappod khaya bondho kor',
          vehicle: 'Nano'
        }
      ]
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
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
