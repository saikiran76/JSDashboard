import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose"

const app = express()

import { ShipmentRouter } from "./routes/shipments";
import { DocumentRouter } from "./routes/document";
import { LocationRouter } from "./routes/locations";

app.use(json())
app.use('/api/shipments', ShipmentRouter);
app.use('/api/documents', DocumentRouter);
app.use('/api/locations', LocationRouter)


const PORT = 4000;
const dbUri = process.env.MONGO_URL  || "";

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
