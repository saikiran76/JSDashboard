import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "https://js-dashboard-easw.vercel.app/",
    optionsSuccessStatus: 200
}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Methods",
    "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    next();
})

import { ShipmentRouter } from "./routes/shipments";
import { DocumentRouter } from "./routes/document";
import { LocationRouter } from "./routes/locations";

app.use(json())
app.use('/api/shipments', ShipmentRouter);
app.use('/api/documents', DocumentRouter);
app.use('/api/locations', LocationRouter)


const PORT = process.env.PORT || 4000;
const dbUri = process.env.MONGO_URL || "";

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
