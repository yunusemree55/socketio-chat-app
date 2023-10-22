<template>
    <div class="chatpage">
        <div class="chat-container">
            <div class="chat">
                <ChatMessageList />
                <ChatForm />
            </div>
        </div>
    </div>
</template>

<script>
import ChatMessageList from "@/components/ChatMessageList.vue"
import { authStore } from "@/stores/index"
import ChatForm from "@/components/ChatForm.vue";

export default {

    data() {
        return {
            authStore: authStore(),
        }
    },

    components:{ ChatMessageList, ChatForm }
}
</script>