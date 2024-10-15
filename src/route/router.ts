import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import NewsDetail from "@/pages/NewsDetail.vue";

const routes = [
    {
        path : '/Home',
        component : Home
    },
    {
        path : '/About',
        component : About
    },
    {
        path : '/News',
        component : News,
        children : [
            {
                path : 'NewsDetail',
                component : NewsDetail
            }
        ]
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router