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
                           <label >Password</label>
                          <v-text-field
                          outlined
                          dense
                          ></v-text-field>
                          <v-btn
                          color="teal"
                          class="white--text"
                          block
                          >Login</v-btn>
                      </v-form>
                  </v-card-text>
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