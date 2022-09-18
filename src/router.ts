import {createRouter, createWebHashHistory} from 'vue-router'
import EntryLogin from './components/EntryLogin.vue'
import WelcomePage from './components/WelcomePage.vue'
import { useCounterStor } from './stores/store'
const route = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path: '/', component: EntryLogin},
        {path:'/login',name:"login",meta:{auth:"true"}, component: WelcomePage}
    ]
})
route.beforeEach((to,from,next)=>{
    const store  = useCounterStor()
    const reqaierAuth = to.matched.some(record => record.meta.auth)
    if(reqaierAuth && !store.islogin){
        next('/login')
    } else {
        next()
    }
})
export default route