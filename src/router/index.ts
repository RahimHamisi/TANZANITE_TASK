import AuthView from '../views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import {createRouter,createWebHistory } from 'vue-router';
import { components } from 'vuetify/dist/vuetify.js';



const routes=[
    {path:'/',namespace:'home',components:HomeView},
    {path:'/salma-auth',namespace:'Authroute',components:AuthView}
]


