import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "login",
        component: () =>
            import ( /* webpackChunkName: "home" */ '@/views/login/Login.vue')
    },
    {
        path: "/create",
        name: "create",
        component: () =>
            import ( /* webpackChunkName: "home" */ '@/views/create/Create.vue')
    },
    {
        path: "/projects",
        name: "projects",
        component: () =>
            import ( /* webpackChunkName: "projects" */ '@/views/projects/Projects.vue'),
        children: [{
            path: ":id",
            name: "project-details",
            component: () =>
                import ( /* webpackChunkName: "project-details" */ '@/components/projects/ProjectDetails.vue')
        }]
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;