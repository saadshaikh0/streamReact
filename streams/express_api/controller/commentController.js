const Comment= require('../models/commentModel');

exports.getComments= async(req,res)=>{
    const comments= await Comment.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).json({status:"success",data:{comments}});
}
exports.getComment=async(req,res)=>{
    let streamId=req.params.streamId;
    const comment=await Comment.find({"streamId":streamId})
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).json({status:"success",data:{comment}});
}
exports.createComment= async(req,res)=>{
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    try{
        
        console.log(req.body);
    const newComment= await Comment.create(req.body);
  
    res.status(201).json({
        status:"success",
        data:{
            comment:newComment
        }
    })
}
catch(err){
    console.log(err);
    res.status(404).send({
        status:"failed"
    })
}
}