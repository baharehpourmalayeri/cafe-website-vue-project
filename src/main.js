import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Menu from './Menu.vue'
import Home from './Home.vue'
import Contact from './Contact.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
