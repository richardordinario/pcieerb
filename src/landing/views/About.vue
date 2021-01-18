<template>
<v-container>
    <v-layout justify-center class="py-16">
        <v-flex lg8 md10 sm12 xs12>
            <v-layout row wrap justify-center>
                <v-flex xs12 sm10 md6>
                    <v-card
                    elevation="0"
                    >
                        <v-card-text>
                            <p class="text-overline teal--text pb-0 mb-0">Contact us</p>
                            <p class="text-h6 font-weight-large" style="font-size: 26px;color: #333333;letter-spacing: 0.05em !mportant;font-weight: 600;margin-bottom: 50px">We'd love to hear from you!</p>
                            <v-list flat>
                                <v-list-item-group>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon large>mdi-account-circle</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <p class="font-weight-bold">Dr. Enrico C. Paringit Executive Director</p>
                                            <p class="mt-2"> Philippine Council for Industry, Energy, and Emerging Technology Research and Development (DOST-PCIEERD)</p>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon large>mdi-map-marker-circle</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <p class="mt-2">4th and 5th Level Science Heritage Bldg.,
                                                Science Community Complex, Gen. Santos Avenue, Bicutan, Taguig City 1631, Philippines
                                            </p>
                                        </v-list-item-content>
                                    </v-list-item>
                                      <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon large>mdi-phone</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <p class="ma-1">Telephone: 8837-2071 to 82 loc. 2100, 2120 & 2121</p>
                                            <p class="ma-1">Email: pcieerd@pcieerd.dost.gov.ph</p>
                                            <p class="ma-1">Pinoy Science Facebook: </p>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm10 md6>
                    <div class="icontainer">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.797341074508!2d121.04756617746112!3d14.489986817585955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf1163cae083%3A0xcaddda2c71bae1d!2sPhilippine%20Council%20for%20Industry%2C%20Energy%20and%20Emerging%20Technology%20Research%20and%20Development!5e0!3m2!1sen!2sph!4v1610960139342!5m2!1sen!2sph" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {

}
</script>
<style>
.icontainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 50px
}

</style>