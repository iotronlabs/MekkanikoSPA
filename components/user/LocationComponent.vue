<template>
  <v-item-group v-model="selectedAddress" @change="selectAddress(selectedAddress)">
    <v-container>
      <v-row>
        <h1 v-if="userAddresses.length == 0" class="mx-auto subtitle-1">You have no saved addresses.</h1>
        <v-col v-for="address in userAddresses" :key="address.id" cols="12" md="4">
          <v-item v-slot:default="{ active, toggle }" :value="address">
            <v-card :color="active ? 'success' : 'primary'" dark @click="toggle" hover>
              <v-card-title>
                {{ address.name }}
                <v-scroll-y-transition>
                  <v-icon v-if="active">mdi-check-circle-outline</v-icon>
                </v-scroll-y-transition>
              </v-card-title>
              <v-card-subtitle>
                {{ address.address }} - {{ address.city }} -
                {{ address.pin }}
              </v-card-subtitle>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script>
export default {
  data() {
    return {
      userAddresses: [],
      selectedAddress: null
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    async initialize() {
      await this.$axios
        .$get('addresses')
        .then(res => {
          this.userAddresses = res.data
        })
        .catch(e => console.log(e))
    },
    updateAddressList(address) {
      console.log(address)
      if (this.userAddresses == null) {
        this.userAddresses = []
        this.userAddresses.push(address)
      } else this.userAddresses.push(address)
    },
    selectAddress(selectedAddress) {
      let location = {}
      location.lat = selectedAddress.geolat
      location.lng = selectedAddress.geolng
      this.$emit('select:address', {
        details: selectedAddress.address,
        pin: selectedAddress.pin,
        city: selectedAddress.city
      })
      this.$emit('select:location', { location: location })
    }
  }
}
</script>
