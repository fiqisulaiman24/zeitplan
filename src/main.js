import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniArrowRight, uniArrowUp } from 'vue-unicons/dist/icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueSmoothScroll from 'vue2-smooth-scroll'

Unicon.add([uniArrowRight, uniArrowUp])
Vue.use(Unicon)
Vue.use(Buefy)
Vue.use(VueSmoothScroll,{
  duration: 1000,
  updateHistory: false,
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    AOS.init({
      once: true,
    })
  },
}).$mount('#app')