const mongoose=require('mongoose');
const User = require("./userModel");
const CommentSchema=mongoose.Schema({
    desc:{
        type:String,
        required:[true,"Description is needed "],
        trim:true
    },
    
    userId:String,
    streamId:String
   
});
const Comment=mongoose.model("Comment",CommentSchema);
module.exports=Comment;