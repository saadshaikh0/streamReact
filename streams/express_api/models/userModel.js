const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"A user must have a name"],
        trim:true
    },
    
    institution:{
        type:String,
        trim:true
    },
    userId:String,
  
});
const User=mongoose.model("User",UserSchema);
module.exports=User;