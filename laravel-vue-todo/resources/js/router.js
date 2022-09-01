import { createRouter, createWebHistory} from "vue-router";
import Home from './components/Home.vue';
import Todos from './components/todos/Todos.vue';
import TodoCreate from './components/todos/Create.vue';
import TodoEdit from './components/todos/Edit.vue';
import Categories from './components/category/Categories.vue';
import CategoryCreate from './components/category/Create.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/todos',
        component: Todos,
        name: 'todos'
    },
    {
        path: '/todo-create',
        component: TodoCreate,
        name: 'todo-create'
    },
    {
        path: '/todo/:id',
        component: TodoEdit,
        name: 'todo-edit'
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