import { defineStore } from "pinia";
import { createPinia, setActivePinia } from "pinia";

export const pinia = createPinia();
setActivePinia(pinia);
export const useStore = defineStore("login", {
  state: () => {
    return { login: "", password: "", islogin: true };
  },
});
