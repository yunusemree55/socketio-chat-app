import {defineStore} from "pinia"


export const authStore = defineStore("auth",{
    state: () => ({
        user:null,
    }),
    actions:{
        setUser(user){
            this.user = user
        },
        
    },
    getters:{
        isAuth(state){
            return state.user !== null
        }
    }
    
})