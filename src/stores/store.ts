import { defineStore } from "pinia";
import { createPinia, setActivePinia} from "pinia"
export const pinia = createPinia()
setActivePinia(pinia)
export const useCounterStor = defineStore("login",{
    state:()=>{
        return {login:"",
                password:"",
                islogin:false};
    },
    actions:{
        setLogin(a:string){
           return this.login=a
        },
        setPassword(a:string){
            return this.password=a
        },
        checkLogin(){
            if(this.login && this.password == "admin")
            {
                return this.islogin = true
            }
        },
        logout(){
            return this.islogin = false, this.login = "", this.password = ""
        }
    }
});