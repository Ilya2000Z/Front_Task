<template>
    <div class="container">
        <p>Welcome</p>
        <button v-on:click="logout()">logout</button>
    </div>
</template>

<script>
     import { defineComponent } from 'vue';
     import {useCounterStor} from '../stores/store'
     import router from '../router'
     import {Chek} from '../server'
    const useStore = useCounterStor()
    export default defineComponent({
        name:"WelcomePage",
        methods:{
            logout(){
                Chek("logout","logout")
                router.push('/login')
            }
        }
    })
</script>

<style scoped> 
     .container{
        width: 500px;
        border-radius: 20px;
        border: 4px solid black;
        display: flex;
        padding: 20px;
        display: inline-block;
    }
    p{
        text-align: center;
    }
    button{
        display: flex;
        margin: 0 auto;
        background-color: white;
        border: 1px solid;
        text-align: center;
        padding: 10px 20px;
    }
    button:hover{
        background-color: rgb(216, 216, 216);
    }
</style>