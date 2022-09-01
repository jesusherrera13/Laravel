import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCirclePlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faCirclePlus);
library.add(faEdit);
library.add(faTrash);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');