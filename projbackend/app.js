require('dotenv').config();

const mongoose = require('mongoose'); 
const express=require("express");
const app=express(); 
const bodyParser= require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");

const authRoutes = require("./routes/auth.js")



//db connection
mongoose.connect(process.env.DATABASE, //dotenv package
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => console.log("DB CONNECTED"));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// MY Routes
app.use("/api", authRoutes);


//port
const port =process.env.PORT || 8000;

//starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port} `);
})
