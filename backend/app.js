import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./src/controllers/socketManager.js";
import cors from "cors";

import {router} from "./src/routes/userRoutes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb" , extended:true}));
app.use("/api/v1/users", router);


const startServer = async ()=>{
   const connectionDB = await mongoose.connect("mongodb+srv://sv8112004_db_user:bd1HWbb4LoEQ25W7@zoomx.xlduumg.mongodb.net/?appName=ZoomX") 
   console.log(`MongoDB connected :${connectionDB.connection.host}`);
server.listen(app.get("port"), ()=>{
    console.log("Server is running on port 8000");
});
}
startServer();