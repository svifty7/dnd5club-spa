import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import '@/assets/styles/index.scss';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
    .use(router)
    .mount('#dnd5club');
