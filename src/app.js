import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import e from "express"

const app = express()

// app.use(cors()) // explore
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential: true
}))

// setting limit so that too much json cant come otherwise server will crash
app.use(express.json({limit: "16kb"}))
// previously express donot accept json easily and had to use body-parser now it is not needed

app.use(express .urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) // explore (this is used to serve static files)
app.use(cookieParser())
export { app }