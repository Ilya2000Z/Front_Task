<template>
    <div>
        <div class="container">
            <label>login</label>
                <input id="1"/>
            <label>Password</label>
                <input id="2"/>
            <div class="button">
                <button  v-on:click="checkLogin()">login</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {useCounterStor} from '../stores/store'
    import router from '../router'
    import {Chek} from '../server'
    const useStore = useCounterStor()
    export default defineComponent({
         name:"EntryLogin",
         methods:{
            checkLogin(){
                const LoginInput = document.getElementById("1") as HTMLInputElement
                const PasswordInput = document.getElementById("2") as HTMLInputElement
                Chek(LoginInput.value,PasswordInput.value)
                router.push('/welcome')           
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
    input{
        display: block;
        width: 100%;
        margin: 15px 0;
    }
    .button{
        display: flex;
        width: 100%;
    }
    button{
        background-color: white;
        border: 1px solid;
        text-align: center;
        padding: 10px 20px;
        margin-left: auto;
    }
    button:hover{
        background-color: rgb(216, 216, 216);
    }
</style>