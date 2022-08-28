require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue';
import router  from './routes.js';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faCirclePlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret);
library.add(faCirclePlus);
library.add(faPencil);
library.add(faTrashCan);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');