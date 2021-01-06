const express= require("express");
const app =express();



// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const port= 8080;
app.get("/",(req, res) => {
    return res.send("hello there");
} )

app.get("/login",(req,res)=>{
   
    return res.send("Welcome to login page");

})

const admin= (req,res) =>{
    return res.send("This is admin dashboard"); 
}

const isAdmin=(req,res,next)=>{
    console.log("isAdmin is running");
    next();
};
 
app.get("/admin",isAdmin,admin )

app.get("/signup",(req,res)=>{
   
    return res.send("You are on sign up page");

})

app.listen(port,()=> {
    console.log("Server is running...")

})
