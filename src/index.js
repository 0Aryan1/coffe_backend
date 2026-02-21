//require('dotenv').config({path: './env'}) //this syntax disturb code consistency

import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        console.log("DB connected successfully!")
    })
    .catch((error) => {
        console.log("MongoDB connection failed !! ", error)
        process.exit(1)
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