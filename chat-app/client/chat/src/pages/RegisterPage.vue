<template>
    <div class="register-page-body">
        <div class="register-card">
            <div class="flex align-items ">
                <label class="mr-5 fw-bold">Username:</label>
                <div class="input-bg">
                    <input placeholder="Enter your username..." v-model="username" />
                </div>
            </div>
            <button  @click="goToChatPage(username)">Join the chat</button>

        </div>
    </div>
</template>

<script>
import router from '@/router';
import { authStore } from "@/stores/index.js"
import { mapState, mapActions } from 'pinia';

export default {

    data() {
        return {
            username: "",
            authStore: authStore()
        }
    },
    methods: {
        goToChatPage(username) {
            if (!username) {
                alert("Please enter your username")
                return;
            }
            this.setUser(username)
            router.push({
                path: "/chatroom",
            })
        },

        ...mapActions(authStore, ["setUser"])
    },

    computed: {
        ...mapState(authStore, ["isLogin"]),
    }

}
</script>