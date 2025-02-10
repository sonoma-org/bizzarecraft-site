import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import Main from './components/Main.vue'
import Play from './components/Play.vue'
import Map from './components/Map.vue'
import Seasons from './components/Seasons.vue'
import Rules from './components/Rules.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/play', component: Play },
  { path: '/map', component: Map },
  { path: '/seasons', component: Seasons },
  { path: '/rules', component: Rules },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
