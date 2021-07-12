const express=require("express");
const { route } = require("../app");
const router=express.Router();
const commentController=require("../controller/commentController");


router.route('/').get(commentController.getComments).post(commentController.createComment);
router.route('/:streamId').get(commentController.getComment);
module.exports=router;