import  { createWebHashHistory,createRouter } from 'vue-router'

const routes = [

    {
        path:"/",
        redirect:"/register"
    },
    {
        path:"/register",
        name:"Register",
        component: () => import("../pages/RegisterPage.vue"),
        
    },
    {
        path:"/chatroom",
        component: () => import("../pages/ChatPage.vue")
    },
]

const router = createRouter({

    routes:routes,
    history:createWebHashHistory()
    
})

export default router