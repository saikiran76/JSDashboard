import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose"
// const router = express.Router();
const app = express()

import { ShipmentRouter } from "./routes/shipments";
import { DocumentRouter } from "./routes/document";
import { LocationRouter } from "./routes/locations";

// app.get("/", (req, res)=>{
//     console.log("Hey there")
// })
app.use(json())
app.use('/api/shipments', ShipmentRouter);
app.use('/api/documents', DocumentRouter);
app.use('/api/locations', LocationRouter)


const PORT = 4000;
const dbUri = 'mongodb+srv://root:root@cluster0.o5xqgfb.mongodb.net/shipment_db';

const start = async () =>{
    try{
        await mongoose.connect(dbUri)
        console.log('DB connected successfully')
    } catch(err){
        console.log(err)
    }
    
    app.listen(PORT, ()=>{
        console.log(`Auth service started at port ${PORT}`)
    })
}

start()
