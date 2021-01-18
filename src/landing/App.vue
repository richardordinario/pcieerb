<template>
    <v-app id="inspire">
        <Index/>
    </v-app>
</template>

<script>
import Index from './Index'
export default {
    name: 'App',
    components: {
        Index
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.v-application {
    font-family: Montserrat !important;
}
</style>
