
const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user_routes")
const { noteRouter } = require("./routes/note_routes")
require("dotenv").config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/note", noteRouter)

app.get("/", (req, res)=>{
    res.send({
        message: "API is working now"
    })
})

app.listen(port, async()=>{
    try
    {
        await connection
        console.log("DB connected")
    }
    catch(error)
    {
        console.log(error)
    }
    console.log(`Server is running on port ${port}`)
})