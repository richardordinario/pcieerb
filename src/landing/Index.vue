<template>
  <div>
    <v-parallax 
        height="auto"
        :src="require('../assets/images/landing/parallax.png')"
        style="padding-bottom: 80px"
        >
        <Navbar/>
        <v-container fill-height>
          <v-layout justify-center class="" style="margin-top: 40px">
            <v-flex lg8 md10 sm12 xs12>
              <v-carousel
              hide-delimiter-background
              :show-arrows="false"
              cycle
              height="auto"
              >
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i">
                <v-img :src="item.src" style="width:100%;height:100%;"></v-img>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-container>
    </v-parallax>
    <Tour/>
    <About/>
    <Contact/>

  </div>

</template>

<script>
import Navbar from './views/Navbar'
import Tour from './views/Tour'
import About from './views/About'
import Contact from './views/Contact'

export default {
  name: 'Index',
  components: {
    Navbar,
    Tour,
    About,
    Contact
  },
  data() {
    return {
      items: [
        {
          src: require('../assets/images/landing/carousel-1.png'),
          title: 'Image 1'
        },
      ],
    }
  },
  methods: {
   
  }
}
</script>

<style>

</style>