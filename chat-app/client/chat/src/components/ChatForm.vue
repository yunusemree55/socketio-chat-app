<template>
    <div class="message-send-container">
        <input v-model="message" />
        <button @click="sendMessage(message)" class="rounded p-5">Send</button>
    </div>
</template>

<script>
import io from "socket.io-client"
import { mapState } from 'pinia';
import { authStore } from "@/stores/index"

const socket = io.connect("http://localhost:3000")

export default {
    data() {
        return {
            message: "",
            authStore: authStore()
        }
    },
 
    methods: {

        sendMessage(msg) {

            const message = {
                username: this.user,
                message: msg
            }

            if(msg !== ""){
                socket.emit("send-message", message)
            }else{
                this.message = ""
            }
        }
    },

    computed: {

        ...mapState(authStore, ["user"])
    },
}
</script>