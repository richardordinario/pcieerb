<template>
  <v-app id="inspire">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-card>
      <v-card-text>
        Im a card
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
