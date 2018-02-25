import Vue from 'vue'
import Vuetify from 'vuetify'
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: '...',
});

new Vue({
  el: '#app',
  render: h => h(App)
})
