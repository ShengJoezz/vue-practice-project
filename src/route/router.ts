import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";

const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
            {path:'/Home',
            component:Home
            },
            {path:'/News',
            component:News
            },
            {path:'/About',
            component:About
            }
        ]
    }
)

export default router