import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import { app,server } from "./SocketIO/server.js"


dotenv.config()

app.use(express.json()) //middleware
app.use(cookieParser())
app.use(cors())


const PORT=process.env.PORT || 3000
const URI=process.env.MONGODB_URI

try{
    mongoose.connect(URI)
    console.log("Mongodb Connected Successfully")
}catch(error){
    console.log(error)
}

app.use("/api/user",userRoute)
app.use("/api/message",messageRoute)

server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})