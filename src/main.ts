import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import { VueMasonryPlugin } from 'vue-masonry';
import FloatingVue from 'floating-vue'
import App from './App.vue';
import '@/assets/styles/index.scss';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$http = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}/api/v1`
})

app.use(pinia)
    .use(router)
    .use(VueMasonryPlugin)
    .use(FloatingVue)
    .mount('#dnd5club');
