import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import Blogs from './components/Blogs.vue';
import Contact from './components/Contact.vue';
import Create from './components/blog/Create.vue';
import Edit from './components/blog/Edit.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;