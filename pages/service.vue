<template>
  <v-container class="px-0 py-0">
    <v-row no-gutters>
      <v-col>
        <v-stepper v-model="stepper">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="stepper>1">Add Location</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" :complete="stepper>2">Select Model</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" :complete="stepper>3">Add Details</v-stepper-step>
          </v-stepper-header>
          <v-stepper-content step="1" class="px-0 py-0">
            <MapComponent />
            <v-btn color="primary" @click="stepper = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px">
              <v-tabs fixed-tabs>
                <v-tab>two-wheeler</v-tab>
                <v-tab-item>
                  <v-col>
                    <v-select label="Select model" outlined></v-select>
                  </v-col>
                </v-tab-item>
                <v-tab>four-wheeler</v-tab>
              </v-tabs>
            </v-card>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MapComponent from '@/components/MapComponent'

export default {
  middleware: 'auth-user',
  data() {
    return {
      stepper: 1
      // default to Kolkata to keep it simple
      // change this to whatever makes sense
    }
  },
  components: {
    MapComponent
  }
}
</script>
<style>
@media only screen and (max-width: 959px) {
  .ignoreMediaFilter .v-stepper__label {
    display: flex !important;
    margin-left: 15px;
  }
}
@media only screen and (min-width: 959px) {
  .ignoreMediaFilter .v-stepper__label {
    display: flex !important;
    margin-left: 7px;
  }
}
</style>