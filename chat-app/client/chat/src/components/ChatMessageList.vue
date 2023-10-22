<template>
    <div class="chat-messages">
        <div v-for="msg in messageList" class="ml-5 chat-bubble" :class="{'text-align-right' : msg.username === user, 'bg-gray':msg.username === user} " :key="msg"> 
            <h5>{{ msg.username }}</h5>
            <p>{{ msg.message }}</p>
        </div>
    </div>
</template>

<script>
import { authStore } from "@/stores"
import { mapState } from "pinia"
import io from "socket.io-client"

const socket = io.connect("http://localhost:3000")

export default {
    data() {
        return {
            messageList: [],
        }
    },

    created() {
        socket.on("receive-message", (data) => {
            this.messageList.push(data)
        })
    },

    computed:{

        ...mapState(authStore,["user"])
    }


}
</script>