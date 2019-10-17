<template>
<v-container-fluid>
   <v-card
      class="mx-auto pb-6"
      max-width="600"
      style="margin-top: -60px; z-index:20;"
      elevation="24"
    >
      <v-toolbar flat>
        <v-toolbar-title>Welcome, John</v-toolbar-title>

        <div class="flex-grow-1"></div>

     

        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>

      
      </v-toolbar>

      <v-divider></v-divider>

      
        <v-card-title>Favourites</v-card-title>
        <v-card
    class="pa-4"
    flat
    height="300px"
    
  >
   <div id="map"><v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon color="primary">mdi-crosshairs-gps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar></div>
    
  </v-card>
     
    </v-card>
  
  <v-sheet
    class="mx-auto mt-2"
    elevation="8"
    max-width="600"
    
  >
  <v-toolbar flat>
        <v-toolbar-title>Rooms</v-toolbar-title>

        <div class="flex-grow-1"></div>

     

        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>

      
      </v-toolbar>

  
    <v-slide-group
      v-model="model"
      class="pa-2"
      center-active
    >
      <v-slide-item
        v-for="n in 4"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-2"
          height="150"
          width="120"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  
</v-container-fluid>
</template>
<style scoped>
#map{
  height: 100%;
}
</style>
<script>
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
  export default {
    data: () => ({
      model: null,
      
    }),
     data () {
      return {
        switch1: true,
        switch2: false,
        switch3: true,
        switch4: false,
      }
    },
  }
  
</script>
