import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'key',
});

const app = new Vue({
  el: '#app',
  router
})
