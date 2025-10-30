<script>
  import Hero from './components/Hero.vue'
  import About from './components/About.vue'
  import Features from './components/Features.vue'
  import Pricing from './components/Pricing.vue'
  import Testimonial from './components/Testimonial.vue'
  import Download from './components/Download.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Hero,
      About,
      Features,
      Pricing,
      Testimonial,
      Download,
      Footer,
    }
  }
</script>

<template>
  <div id="app">
    <Hero/>
    <About/>
    <Features/>
    <Pricing/>
    <Testimonial/>
    <Download/>
    <Footer/>
  </div>
</template>

<style>
  @import url('./assets/css/zeitplan.css');
</style>