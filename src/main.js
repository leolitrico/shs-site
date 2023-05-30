import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    // define your other routes here
  ],
})

createApp(App).use(router).use(vuetify).mount('#app')