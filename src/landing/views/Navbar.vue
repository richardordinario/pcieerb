<template>
    <v-container fill-height>
        <v-layout justify-center class="mt-5">
            <v-flex lg10 md10 sm12 xs12>
                <v-app-bar
                elevation="0"
                color="transparent"
                >
                    <v-img
                    class="mx-2"
                    :src="require('../../assets/images/landing/logo.png')"
                    max-height="50"
                    max-width="50"
                    ></v-img>
                    <v-toolbar-title>
                        <v-img
                        class="hidden-md-only hidden-xs-only"
                        :src="require('../../assets/images/landing/title.png')"
                        ></v-img>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn elevation="0" color="transparent white--text" class="mx-4">Home</v-btn>
                        <v-btn elevation="0" color="transparent white--text" class="mx-4">Virtual Tour</v-btn>
                        <v-btn elevation="0" color="transparent white--text" class="mx-4">About Us</v-btn>
                        <v-btn elevation="0" color="transparent white--text" class="mx-4">Contact Us</v-btn>
                    </v-toolbar-items>
                    <v-menu v-if="$vuetify.breakpoint.smAndDown">
                        <template v-slot:activator="{ on }">
                        <v-btn color="white" icon v-on="on">
                            <v-icon class="white--text">mdi-dots-vertical</v-icon>
                        </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Home</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Virual Tour</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>About Us</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Contact Us</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-app-bar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>