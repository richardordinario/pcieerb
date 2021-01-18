<template>
<v-app id="inspire">
  <v-container fill-height>
      <v-layout justify-center align-content-center class="my-16">
          <v-flex xs12 sm8 md4 lg3>
              <v-card>
                  <v-card-text>
                      <p class="overline">Teacher Login</p>
                      <v-form class="ma-5">
                          <label >Email</label>
                          <v-text-field
                          outlined
                          dense
                          ></v-text-field>
                           <label>Password</label>
                          <v-text-field
                          outlined
                          dense
                          ></v-text-field>
                          <v-btn
                          color="teal"
                          class="white--text"
                          block
                          x-large
                          @click="login"
                          >Login</v-btn>
                      </v-form>
                  </v-card-text>
                  <v-card-actions>
                        <v-spacer></v-spacer>
                        <a href="/teacher-register">
                            <v-btn small plain text>Need an account?</v-btn>
                        </a>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</v-app>

</template>

<script>
export default {
    data() {
        return {
            auth: ''
        }
    },
    methods: {
        login() {
            localStorage.setItem('auth', true)
            window.location = '/teacher'
        }
    },
}
</script>

<style>

</style>