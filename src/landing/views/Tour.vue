<template>
    <v-layout justify-center class="tour-section">
      <v-flex lg6 md8 sm10 xs10>
        <v-card
        rounded
        style="margin-top: -40px"
        >
          <v-card-text class="pb-0 mb-0 justify-center">
            <p class="text-overline text-center teal--text mb-0 pb-0" style="font-size: 20px !important">VIRTUAL TOUR</p>
            <p class="text-caption text-center mt-2" style="font-size: 18px !important">Get to know PCIEERD through our 360° virtual tour.</p>
            <v-divider class="ma-5"></v-divider>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm4 md4>
                  <v-card 
                  elevation="0"
                  >
                    <v-card-title class="justify-center">
                      <p class="text-subtitle-1">Covid-19 Response</p>
                    </v-card-title>
                    <v-card-text v-if="showTour" class="justify-center">
                      <v-img :src="require('../../assets/images/landing/vr-1.png')"></v-img>
                      <p class="text-subtitle-2 text-center ma-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet neque tellus viverra elementum euismod egestas justo. </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-card 
                  elevation="0"
                  >
                    <v-card-title class="justify-center">
                      <p class="text-subtitle-1">Technologies for Commercialization</p>
                    </v-card-title>
                    <v-card-text v-if="showTour" class="justify-center">
                      <v-img :src="require('../../assets/images/landing/vr-2.png')"></v-img>
                      <p class="text-subtitle-2 text-center ma-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet neque tellus viverra elementum euismod egestas justo. </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-card 
                  elevation="0"
                  >
                    <v-card-title class="justify-center">
                      <p class="text-subtitle-1">Testing Facilities</p>
                    </v-card-title>
                    <v-card-text v-if="showTour" class="justify-center">
                      <v-img :src="require('../../assets/images/landing/vr-3.png')"></v-img>
                      <p class="text-subtitle-2 text-center ma-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet neque tellus viverra elementum euismod egestas justo. </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
                <center>
                    <v-btn v-if="showTour" max-width="277" width="277" color="teal" class="white--text">START TOUR</v-btn>
                </center>
          </v-card-text>
           
          <v-card-actions class="justify-center ma-0 pa-0">
            <v-btn icon x-large @click="btnTour">
              <v-icon v-if="showTour" color="teal">mdi-chevron-up</v-icon>
              <v-icon v-else color="teal">mdi-chevron-down</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            showTour: false,
        }
    },
    methods: {
            btnTour() {
                this.showTour = !this.showTour
            }
        }
}
</script>

<style>
.tour-section {
    background: #F7F7F7;
    padding-bottom: 50px;
}
</style>