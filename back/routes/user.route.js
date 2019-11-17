const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user.controller');
const passportConf=require('../config/passport');
const passport =require('passport');

router.route('/register').post(controllerUser.register);
router.route('/login').post(controllerUser.login)
router.route('/loginGoogleOAuth').post(passport.authenticate('googleToken', { session: false }),controllerUser.googleOAuth)
module.exports = router;