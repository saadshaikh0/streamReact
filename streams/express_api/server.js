
const app= require("./app");
const mongoose= require("mongoose");
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});

const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true
    }).then(con=>console.log("DB connection sucessful"));


const PORT=5000;
app.listen(PORT, ()=>{
    console.log("Server is on");
});