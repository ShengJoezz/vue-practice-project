import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import NewsDetail from "@/pages/NewsDetail.vue";

const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
            {path:'/Home',
            component:Home
            },
            {path:'/News',
            component:News,
            children:[
                {
                path:"detail",
                 component:NewsDetail,   
                }
            ]
            },
            {path:'/About',
            component:About
            }
        ]
    }
)

export default router