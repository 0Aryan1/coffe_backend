//require('dotenv').config({path: './env'}) //this syntax disturb code consistency

import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {

        app.on("error",(error) => {
            console.log("ERROR: ",error)
            throw error
        })

        app.listen(process.env.PORT || 8000 , () => {
            console.log(`server is running at port: ${process.env.PORT || 8000}`)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed !! ", error)
        
    })









/*
import express from 'express'
const app = express()

;(async() => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERROR: ",error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listeningon port ${process.env.PORT}`)
        })
    } catch(error){
        console,log("ERROR: ",error)
        throw error
    }
})()
*/