import {createRouter, createWebHistory} from 'vue-router'
import EntryLogin from './components/EntryLogin.vue'
import WelcomePage from './components/WelcomePage.vue'
import { useCounterStor } from './stores/store'
import {Chek} from './server'
const route = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/', component: EntryLogin},
        {path:'/login',name:"login",meta:{auth:true}, component: WelcomePage}
    ]
})
route.beforeEach((to,from,next)=>{
    Chek("","").then((reqwest)=>{
    const reqaierAuth = to.meta.auth
    if(reqaierAuth && !reqwest)
        next('/')
     else 
        next()
    })
})
export default route