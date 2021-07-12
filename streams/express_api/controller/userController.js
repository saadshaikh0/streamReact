const User= require('../models/userModel');

exports.getUsers= async(req,res)=>{
    const users= await User.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).json({status:"success",data:{users}});
}

exports.createUser= async(req,res)=>{
    console.log(req.body);
    var temp=await User.find({"name":req.body.name}).exec();
    console.log(temp)
    try{
        if(temp.length!=0){
            console.log("User already Present");
            res.status(403).json({
                status:"failed",
                message:"User already Present"
            });
            return;
        }
        console.log(req.body);
    const newUser= await User.create(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).json({
        status:"success",
        data:{
            user:newUser
        }
    })
}
catch(err){
    // console.log(err);
    res.status(404).send({
        status:"failed"
    })
}
}