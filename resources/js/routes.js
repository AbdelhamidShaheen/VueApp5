
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import NotFound from "./views/NotFound.vue";



export default createRouter({
    routes: [
        {
            name: "login",
            path: "/login",
            component: Login
        },
        {
            name: "register",
            path: "/register",
            component: Register
        },
        {
            name: "home",
            path: "/",
            component: Home
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
    history: createWebHistory()
});
