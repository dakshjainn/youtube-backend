import mongoose from 'mongoose';
import { DB_NAME } from './constants';

import express from "express";
const app = express()


// using ; here in the start of the line is good practice
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("erroe" , (error) => {
            console.error("application is not able to talk to the db. ERROR: " + error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on PORT ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR aa gya a db connent krne mai"  + error)
        throw error
    }
} )() 

const mongoose = require(mongoose)