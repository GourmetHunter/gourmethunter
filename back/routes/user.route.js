const express=require('express');
const router=express.Router();
const controllerUser=require('../controllers/user.controller');
router.route('/register').post(controllerUser.register);
module.exports =router;