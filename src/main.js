import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Menu from './Menu.vue'
import Home from './Home.vue'
import Contact from './Contact.vue'
import MenuItem from './MenuItem.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/contact', component: Contact },
  { path: '/menuItem/:drinkId', component: MenuItem }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
