import HomeView from '@/views/HomeView.vue';
import {createRouter,createWebHistory } from 'vue-router';
import { components } from 'vuetify/dist/vuetify.js';



const routes=[
    {path:'/',namespace:'home',component:HomeView},

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


