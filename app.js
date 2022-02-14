//env config
require("dotenv").config()

const express = require('express')
const cors = require("cors")

const  app  = express()


//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const db = require("./models");
db.sequelize.sync();

// Register Routes
app.use("/api/v1/employees", require("./routes/employee.route"))

app.use("/", (req, res) => {
  res.send("Hello there")
})


//Connect Server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected  on port ${process.env.PORT}`)
})