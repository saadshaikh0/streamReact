const express=require("express");
const { route } = require("../app");
const router=express.Router();
const userController=require("../controller/userController");


router.route('/').get(userController.getUsers).post(userController.createUser);

module.exports=router;