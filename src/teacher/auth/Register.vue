<template>
<v-app id="inspire">
  <v-container fill-height>
      <v-layout justify-center align-content-center class="my-16">
          <v-flex xs12 sm8 md4 lg4>
              <v-card>
                  <v-card-text>
                      <p class="overline">Teacher Registeration</p>
                      <v-form class="ma-5">
                          <label >Name</label>
                          <v-text-field
                          type="text"
                          outlined
                          dense
                          ></v-text-field>
                          <label >Email</label>
                          <v-text-field
                          type="email"
                          outlined
                          dense
                          ></v-text-field>
                        <label >Password</label>
                        <v-text-field
                        type="password"
                        outlined
                        dense
                        ></v-text-field>
                        <label >Password Confirmation</label>
                        <v-text-field
                        type="password"
                        outlined
                        dense
                        ></v-text-field>
                        <v-btn
                        color="teal"
                        class="white--text"
                        block
                        x-large
                        >Register</v-btn>
                      </v-form>
                  </v-card-text>
                  <v-card-actions>
                        <v-spacer></v-spacer>
                        <a href="/teacher-login">
                            <v-btn small plain text>Already have an account?</v-btn>
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

}
</script>

<style>

</style>