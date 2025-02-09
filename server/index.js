const express = require("express")
const mongoose = require("mongoose")
const userController = require("./routes/user")
const listController = require("./routes/list")
const dotenv = require('dotenv');
const cors = require("cors");
const { dbUrl, port } = require("./utilities");

const app = express()
dotenv.config();
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


mongoose.connect(dbUrl, () => {
    console.log("connected to db")
}, (err) => {
    console.log(err)
})


app.use("/user", userController)
app.use("/list", listController)

app.listen(port, () => {
    console.log("server started")
})