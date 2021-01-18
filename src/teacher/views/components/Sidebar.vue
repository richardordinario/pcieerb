<template>
    <div>
        <v-app-bar
        flat
        color="teal"
        >
            <a href="/">
            <v-img :src="require('../../../assets/images/landing/logo.png')"
            max-height="40"
            max-width="40" 
            ></v-img>
            </a>
            <v-toolbar-title>
                <!-- <p class="text-subtitle-1 ma-5 white--text">PCI-EERD</p> -->
            </v-toolbar-title>
        </v-app-bar>
        <v-list>
            <v-list-item to="/dashboard">
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
             <v-list-item to="/subject">
                <v-list-item-icon>
                    <v-icon>mdi-book</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Subject</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    export default {
        props: {
            isDrawer: Boolean
        }
    }
</script>

<style lang="scss" scoped>

</style>