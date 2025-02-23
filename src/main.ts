import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import Main from './components/Main.vue'
import Play from './components/Play.vue'
import MC from './components/MC.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/play', component: Play },
  { path: '/mc', component: MC }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
