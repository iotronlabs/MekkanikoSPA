<template>
  <v-stepper v-model="active" vertical>
    <v-stepper-step :complete="active > 1" step="1">Enter email</v-stepper-step>
    <v-stepper-content step="1">
      <div class="py-1">
        <v-form id="sign-up-form" ref="sign-up-form" method="post" @submit.prevent="getOtp">
          <v-text-field
            prepend-inner-icon="mdi-email"
            label="Enter your email"
            name="email"
            type="email"
            v-model="email"
            :rules="[rules.required, rules.email]"
            outlined
            :error-messages="error"
            :loading="isLoading"
          ></v-text-field>
          <v-radio-group v-model="accountType" mandatory :disabled="isLoading">
            <v-radio label="New Account" value="new"></v-radio>
            <v-radio label="Reset Pass" value="reset"></v-radio>
          </v-radio-group>
          <v-btn
            color="primary"
            class="my-2"
            :loading="isLoading"
            :disabled="!email"
            rounded
            type="submit"
          >Send OTP</v-btn>
        </v-form>
      </div>
    </v-stepper-content>

    <v-stepper-step :complete="active > 2" step="2">Enter OTP</v-stepper-step>

    <v-stepper-content step="2">
      <div class="py-1">
        <v-btn class="mb-4" :disabled="isLoading" @click="active=1">Change email</v-btn>

        <v-form id="form-two" method="post" @submit.prevent="validateOtp">
          <v-text-field
            label
            placeholder="Your OTP"
            type="text"
            v-model="otp"
            autocomplete="off"
            required
            outlined
            :loading="isLoading"
            :success-messages="message"
            :error-messages="error"
            maxlength="4"
          ></v-text-field>
          <v-btn
            color="primary"
            :loading="isLoading"
            :disabled="!otp"
            type="submit"
            class="mr-2"
            rounded
          >Confirm</v-btn>
          <v-btn
            color="primary"
            :loading="isLoading"
            rounded
            outlined
            @click.prevent="getOtp"
          >Resend OTP</v-btn>
        </v-form>
      </div>
    </v-stepper-content>

    <v-stepper-step :complete="active > 3" step="3">Enter Details</v-stepper-step>
    <v-stepper-content step="3">
      <div color class="py-1">
        <v-form id="form-three" ref="form-three" method="post" @submit.prevent="register">
          <v-text-field
            label="Name"
            name="name"
            type="text"
            v-model="name"
            autocomplete="off"
            required
            outlined
            :rules="[rules.required]"
            maxlength="30"
          ></v-text-field>

          <v-text-field
            id="password"
            prepend-inner-icon="mdi-lock"
            v-model="password"
            :append-icon="show ? 'mdi-visibility' : 'mdi-visibility_off'"
            :type="show ? 'text' : 'password'"
            label="Password"
            name="password"
            hint="At least 8 characters"
            autocomplete="off"
            @click:append="show = !show"
            outlined
            maxlength="30"
            :rules="[rules.required, rules.counter]"
            :error-messages="error"
          ></v-text-field>
          <v-text-field
            id="cnfpassword"
            prepend-inner-icon="mdi-lock"
            v-model="confirm_password"
            :append-icon="show ? 'mdi-visibility' : 'mdi-visibility_off'"
            :type="show ? 'text' : 'password'"
            label="Confirm Password"
            name="cnfpassword"
            hint="At least 8 characters"
            autocomplete="off"
            @click:append="show = !show"
            outlined
            maxlength="30"
            :rules="[rules.required, rules.counter]"
            :error-messages="error"
          ></v-text-field>
          <v-btn color="primary" class="mr-2" type="submit" form="form-three" rounded>Sign Up</v-btn>
          <v-btn color="primary" rounded outlined>Cancel</v-btn>
        </v-form>
      </div>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      show: false,
      isLoading: false,
      email: null,
      accountType: this.$route.query.type,

      otp: '',
      name: null,
      password: '',
      confirm_password: '',
      message: '',
      error: null,
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 30 || 'Max 30 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },

  watchQuery(newQuery) {
    this.accountType = newQuery.type
  },
  methods: {
    async getOtp() {
      this.isLoading = true
      this.error = null
      this.message = ''
      await this.$axios
        .$post('/otprequest', {
          email: this.email,
          type: this.accountType
        })
        .then(response => {
          if (response.success) {
            ;(this.message = response.message),
              (this.name = response.user),
              (this.active = 2),
              (this.error = null)
            this.$store.commit('SET_SNACKBAR', {
              color: 'success',
              text: response.message
            })
          } else {
            ;(this.error = response.message),
              this.$store.commit('SET_SNACKBAR', {
                color: 'warning',
                text: response.message
              })
          }
        })
        .catch(e => {
          console.log(e)
          this.error = "Couldn't send OTP."
          //this.$router.push('/register-reset')
        })
      this.isLoading = false
    },
    async validateOtp() {
      this.isLoading = true
      await this.$axios
        .$post('/otpvalidate', {
          email: this.email,
          otp: this.otp
        })
        .then(response => {
          if (response.success) {
            this.message = response.message
            this.error = null
            ;(this.active = 3),
              this.$store.commit('SET_SNACKBAR', {
                color: 'success',
                text: response.message
              })
          } else {
            ;(this.error = response.message),
              this.$store.commit('SET_SNACKBAR', {
                color: 'warning',
                text: response.message
              })
          }
        })
        .catch(e => {
          console.log(e)
          this.error = "Couldn't validate otp."
          //this.$router.push('/register-reset')
        })
      this.isLoading = false
    },

    async register() {
      if (this.password == this.confirm_password) {
        await this.$axios
          .$post('/register', {
            type: this.accountType,
            email: this.email,
            password: this.password,
            name: this.name,
            c_password: this.confirm_password
          })
          .then(response => {
            console.log(response.message)
            if (response.success) {
              this.$router.push({
                path: '/auth/social-callback',
                query: { token: response.token }
              })
            } else {
              ;(this.error = response.message),
                this.$store.commit('SET_SNACKBAR', {
                  color: 'warning',
                  text: response.message
                })
            }
          })
          .catch(e => {
            console.log(e), (this.error = 'Registration failed.')
          })
      } else {
        this.error = 'Passwords not matching.'
      }
    }
  }
}
</script>