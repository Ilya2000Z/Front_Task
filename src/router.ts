import {createRouter, createWebHistory} from 'vue-router'
import EntryLogin from './components/EntryLogin.vue'
import WelcomePage from './components/WelcomePage.vue'
import { useCounterStor } from './stores/store'
import {Chek} from './server'
const route = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/', redirect: '/login'},
        {path: '/login', component: EntryLogin},
        {path:'/welcome',name:"login",meta:{auth:true}, component: WelcomePage}
    ]
})
route.beforeEach((to,from,next)=>{
    Chek("","").then((reqwest)=>{
    const reqaierAuth = to.meta.auth
    if(reqaierAuth && !reqwest)
        next('/login')
     else 
        next()
    })
})
export default route