<template>
    <v-app id="inspire">
        <v-app-bar
        elevation="2"
        color="white"
        app>
            <v-app-bar-nav-icon color="grey" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer
        v-model="drawer"
        app>
           <Sidebar/>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Sidebar from './views/components/Sidebar'

    export default {
        components: {
            Sidebar,
        },
        data() {
            return {
                drawer: true,
                auth: ''
            }
        },
        methods: {
            btnDrawer() {
                this.drawer = !this.drawer 
            }
        }
    }
</script>

<style scoped>

</style>