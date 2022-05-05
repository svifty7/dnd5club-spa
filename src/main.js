import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueMasonryPlugin } from 'vue-masonry';
import { VTooltip } from 'floating-vue';
import router from './router';
import App from './App.vue';
import 'swiper/css';
import 'swiper/css/bundle';
import '@/assets/styles/index.scss';

const app = createApp(App);

app.use(createPinia())
    .use(router)
    .use(VueMasonryPlugin)

app.directive('tooltip', VTooltip)

app.mount('#dnd5club');
