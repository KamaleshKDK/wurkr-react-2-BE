const express = require("express");
const app = express();
const cors= require("cors");
require("dotenv").config();
const connection = require("./db");
const userRoutes  = require("./routes/user");
const authRoutes = require("./routes/auth");


//database
connection();

//MiddleWares

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);


//Port
const port  =process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Listening on port ${port}`));