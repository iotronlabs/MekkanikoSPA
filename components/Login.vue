<template>
  <div>
    <v-btn color="primary" dark @click.stop="dialog = true">Sign In</v-btn>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-container fluid>
          <v-row no-gutters>
            <v-col class="d-flex justify-center" md="8" offset-md="2">
              <v-form @submit.prevent="login" id="login-form" method="post">
                <v-img
                  :src="require('@/assets/logo.png?webp')"
                  contain
                  width="200"
                  @click="$vuetify.goTo(0)"
                  class="mx-auto my-6"
                />

                <v-text-field
                  prepend-icon="mdi-email"
                  label="Email ID"
                  name="email"
                  type="email"
                  v-model="email"
                  autocomplete="off"
                ></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Password"
                  name="password"
                  hint="At least 8 characters"
                  autocomplete="off"
                  @click:append="show = !show"
                ></v-text-field>
                {{ message }}
                <div class="d-flex justify-center">
                  <v-btn color="primary" rounded outlined type="submit" class="mt-4">LogIn</v-btn>
                </div>

                <br />
                <hr />
                <br />
                <p class="text-center grey--text subtitle-2">LOG IN VIA</p>

                <v-row no-gutters justify="space-around">
                  <v-btn
                    color="blue"
                    class="white--text ma-1"
                    @click.prevent="socialLogin('facebook')"
                  >
                    facebook
                    <v-icon right>mdi-facebook</v-icon>
                  </v-btn>

                  <v-btn
                    color="red"
                    class="white--text ma-1"
                    @click.prevent="socialLogin('google')"
                  >
                    google
                    <v-icon right>mdi-google</v-icon>
                  </v-btn>
                </v-row>
              </v-form>
            </v-col>
          </v-row>

          <br />
          <hr />
          <br />
          <v-row no-gutters class="my-2" justify="space-around">
            <v-btn
              text
              x-small
              :to="{path: '/register-reset', query: {type: 'new'}}"
              @click="dialog=false"
            >Create an account</v-btn>

            <v-btn
              text
              x-small
              :to="{path: '/register-reset', query: {type: 'reset'}}"
              @click="dialog=false"
            >Forgot password</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      email: '',
      password: '',
      show: false,
      rules: {
        required: v => !!v || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailValid: v => /.+@.+/.test(v) || 'E-mail must be valid'
      },
      checkbox: false,
      logins: ['Sign In', 'Register or Reset'],
      message: ''
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      this.checkLogin()
    },
    socialLogin(service) {
      window.location.href = 'https://api.mekkaniko.com/api/login/' + service
    },
    checkLogin() {
      console.log(this.$auth.user)
      if (this.$auth.loggedIn) {
        this.dialog = false
      } else {
        this.message = 'Invalid email or password'
      }
    }
  }
}
</script>
