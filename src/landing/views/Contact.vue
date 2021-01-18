<template>
  <v-parallax
    :src="require('../../assets/images/landing/bg-contact.png')"
    height="auto"
    class="contact-bg"
  >
    <v-container fluid class="overlay">
        <v-layout justify-center>
            <v-flex sm10 md10 lg7>
                <v-layout row wrap justify-center class="pa-5">
                    <v-flex md6>
                        <div class="ma-10">
                            <p class="overline ">Name</p>
                            <v-text-field
                            class=""
                            solo
                            ></v-text-field>
                            <p class="overline ">Email Address</p>
                            <v-text-field
                            class=""
                            solo
                            ></v-text-field>
                            <p class="overline ">Subject</p>
                            <v-text-field
                            class=""
                            solo
                            ></v-text-field>
                        </div>
                    </v-flex>
                    <v-flex md6>
                        <div class="ma-10">
                            <p class="overline">Message</p>
                            <v-textarea solo></v-textarea>
                            <v-btn block class="pr-10 darken-4 white--text pa-6" color="blue-grey"> Send <v-icon>mdi-telegram</v-icon></v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
    <v-app-bar class="justify-center" color="transparent" elevation="0">
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <p class="overline white--text text-center">
                Copyright © 2021 PCIEERD | All Rights Reserved
            </p>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
  </v-parallax>
</template>

<script>
export default {

}
</script>

<style>
.overlay {
    /* background-color: rgba(32, 105, 96, 0.66);
    height: 100%;
    width: 100% !important;
    overflow: hidden !important; */
}

</style>