<template>
  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="Schedule Pick-up"
        prepend-icon="mdi-calendar-blank"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable color="primary" :min="minDate" :max="maxDate">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>

      <v-btn text color="primary" @click="selectedDate(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    minDate: null,
    maxDate: null,
    modal: false
  }),
  mounted() {
    this.getCurrentDate()
  },
  methods: {
    getCurrentDate() {
      let today = new Date()
      today.setDate(today.getDate() + 1)
      let dd = today.getDate()
      let mm = today.getMonth() + 1 //As January is 0.
      let yyyy = today.getFullYear()
      today.setDate(today.getDate() + 30)
      let maxmm = today.getMonth() + 1
      let maxdd = today.getDate()
      let maxyy = today.getFullYear()

      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm
      if (maxmm < 10) maxmm = '0' + maxmm
      if (maxdd < 10) maxdd = '0' + maxdd
      this.minDate = yyyy + '-' + mm + '-' + dd
      this.date = yyyy + '-' + mm + '-' + dd
      this.maxDate = maxyy + '-' + maxmm + '-' + maxdd
    },
    selectedDate(date) {
      this.$refs.dialog.save(date)
      this.$emit('update:date', date)
    }
  }
}
</script>