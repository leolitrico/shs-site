import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Date1835 from './date/1835-page.vue'
import Date1855 from './date/1855-page.vue'
import Date1875 from './date/1875-page.vue'
import Date1895 from './date/1895-page.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeApp } from "firebase/app";

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
    { path: '/date/1835-page', component: Date1835 },
    { path: '/date/1855-page', component: Date1855 },
    { path: '/date/1875-page', component: Date1875 },
    { path: '/date/1895-page', component: Date1895 },
  ],
})


createApp(App).use(router).use(vuetify).mount('#app')