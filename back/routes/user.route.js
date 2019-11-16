const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user.controller');
router.route('/register').post(controllerUser.register);
router.route('/login').post(controllerUser.login)
module.exports = router;