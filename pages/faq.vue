<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2">
          <v-card-title class="headline">FAQ</v-card-title>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Areas served by us.</v-expansion-panel-header>
              <v-expansion-panel-content>
                Our Services are available across Kolkata and Salt
                Lake.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Supported payment methods.</v-expansion-panel-header>
              <v-expansion-panel-content>
                All payments will be made by CASH on delivery on completion of
                the order.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>How long does the service takes?</v-expansion-panel-header>
              <v-expansion-panel-content>
                We will try to deliver your vehicle on the same day. In case of
                any delay our experts will contact you
                personally.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>What are the operating hours?</v-expansion-panel-header>
              <v-expansion-panel-content>
                We are open 6 days a week, (Monday–Saturday). We operate from
                9am-4pm. You can book online at any time of the day and our
                experts will contact you during the operating hours mentioned
                above.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Pricing and Payments.</v-expansion-panel-header>
              <v-expansion-panel-content>
                We reserve the rights to change price any point of time without
                prior notice. On an unpaid reservation, MEKKANIKO will retain
                your vehicle, not releasing it until you make the
                payment.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-card-title class="headline">Company Policies</v-card-title>
            <v-expansion-panel>
              <v-expansion-panel-header>Refund Policy.</v-expansion-panel-header>
              <v-expansion-panel-content>
                We do not entertain Return and Refund under any
                Circumstances.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Cancellation Policy.</v-expansion-panel-header>
              <v-expansion-panel-content>
                -Cancellation request can be made via the web app used to make
                the booking or via e-mail to bookings@mekkaniko.com
                <br />-Cancellations will be considered only if the request is
                made before the vehicle has reached the Service Station.
                <br />-In case pickup/drop service is availed, a cancellation
                fee of INR 99.00 will be charged once the cancellation request
                is accepted.
                <br />-Cancellation request will not be entertained if the orders have
                been communicated to the vendors/merchants and they have
                initiated the services.
                <br />-In case cancellation is made via phone call, cancellation is to
                be deemed accepted by Mekkaniko.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
    }
  },

  mounted() {},

  methods: {
    // receives a place object via the autocomplete component
  }
}
</script>
