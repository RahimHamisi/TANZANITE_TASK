
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vue3AnimateOnScroll from 'vue3-animate-onscroll';

const app = createApp(App);
app.use(vuetify);
app.use(Vue3AnimateOnScroll,{});
app.mount('#app');
