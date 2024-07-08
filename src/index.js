//  As early as possible in your application, import and configure dotenv
// require('dotenv').config() // not good for consistency of code (phele ye fhir import statements so not good looking)
import dotenv from "dotenv"
import connectDB from './db/index.js';
dotenv.config({
    path: './env'
})
// as this is new feature. add "-r dotenv/config --experimental-json-modules" in dev script in package.json to load all env variable at the start
// -r means red flag because we are using experimental feature (this whole thing will be automatically in the future)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is runninf at server: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDb connection failed !!!", err)
})



/*
// better approach is connection the db in another file and ther just running the file
import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import express from "express";
const app = express()


// using ; here in the start of the line is good practice
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        app.on("error" , (error) => {
            console.error("application is not able to talk to the db. ERROR: " + error);
            throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on PORT ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("Monodb connection FAILED"  + error)
        throw error
    }
} )() 

const mongoose = require(mongoose)
*/