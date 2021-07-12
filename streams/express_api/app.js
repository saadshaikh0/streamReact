const express=require("express");
const cors=require("cors");
const app=express();
const userRouter= require("./routes/userRouter");
const commentRouter = require("./routes/commentRouter");
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
res.status(201).send("Happy HOli");
});

//Mounting Routers
app.use("/users",userRouter);
app.use("/comments",commentRouter);

module.exports= app;