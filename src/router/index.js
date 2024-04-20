import Vue from "vue";
import VueRouter from "vue-router";

import tool from "./tools";
import store from "@/store";

Vue.use(VueRouter);

const AsyncLoad = tool.AsyncLoad;

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => AsyncLoad(import("@/views/home"))
    },
    {
        path: "/login",
        name: "login",
        component: () => AsyncLoad(import("@/views/settings/login/login.vue"))
    },
    {
        path: "/register",
        name: "register",
        component: () => AsyncLoad(import("@/views/settings/login/apply.vue"))
    },
    {
        path: "/forgot",
        name: "forgot",
        component: () => AsyncLoad(import("@/views/settings/login/forgot.vue"))
    },
    {
        path: "/partitions/:id",
        name: "Home",
        component: () => AsyncLoad(import("@/views/home"))
    },
    {
        path: "/notebook/:path",
        name: "NoteBook",
        component: () => AsyncLoad(import("@/views/notebook"))
    },
    {
        path: "/notebook/remote/:path",
        name: "NoteBook",
        component: () => AsyncLoad(import("@/views/notebook"))
    },
    {
        path: "/templates",
        name: "Templates",
        component: () => AsyncLoad(import("@/views/templates"))
    },
    {
        path: "/settings",
        name: "Settings",
        component: () => AsyncLoad(import("@/views/settings"))
    },
    {
        path: "/dev",
        name: "Dev",
        component: () => AsyncLoad(import("@/views/dev"))
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const isLogin = store.state.User.info.id !== null;
    if (!isLogin && to.path !== '/login' && to.path !== '/forgot' && to.path !== '/register') {
        next('/login');
    } else {
        next();
    }
});
export default router;