const express = require("express")
const app = express()
const http = require("http")
const cors = require("cors")
const {Server} = require("socket.io")


app.use(cors())

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"http://localhost:8080",
        methods:["GET","POST"]
    }
})

io.on("connection", (socket) => {
    console.log("A User connected: " + socket.id);

    socket.on("send-message",(value) => {
        
        socket.broadcast.emit("receive-message",value)
    })
})


server.listen(3000,() => {
    console.log("Server listening on port 3000");
})

