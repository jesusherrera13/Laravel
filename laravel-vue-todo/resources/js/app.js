import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

library.add(faCirclePlus);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');