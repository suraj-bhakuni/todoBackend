

const express = require("express");
const app = express();

//load config fro env

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo api
const todoRoutes = require("./routes/todos");

//mount the todo APIs Routes
app.use("/api/v1", todoRoutes)

//start server

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//DB connection

const dbConnect = require("./config/database");
dbConnect();

//Default route
app.get("/",(req, res) => {
    res.send(`<h1>This is Homepage!</h1>`);
})
