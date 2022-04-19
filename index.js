import express from 'express'
import mongoose from "mongoose";
import {dbUrl} from "./config.js";
import authRouter from './authRouter.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(dbUrl)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {

    }
}

start()