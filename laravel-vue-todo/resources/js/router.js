import { createRouter, createWebHistory} from "vue-router";
import Home from './components/Home.vue';
import Categories from './components/category/Categories.vue';
import CategoryCreate from './components/category/Create.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/categories',
        component: Categories,
        name: 'categories'
    },
    {
        path: '/category/create',
        component: CategoryCreate,
        name: 'category-create'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;