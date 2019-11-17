const User = require("../models/user.model");
const config = require('../config/helper');
const jwt=require('jsonwebtoken');
//Load input validation
const validateRegisterInput = require("../validation/user.register");
const validateLoginInput = require("../validation/user.login");

const register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ "local.email": req.body.email }, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: "error"
      });
    }
    if (result) {
      res.status(403).json({
        message: "User existed!"
      });
    } else {
      const user = new User({
        method: "local",
        local: {
          email: req.body.email,
          userName: req.body.userName
        },
        password: req.body.password,
        gender: req.body.gender
      });

      user.save(err => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: "error"
          });
        }
        res.status(200).json({
          message: "Successfully signed up!"
        });
      });
    }
  });
};

const login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ "local.email": req.body.email }, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: "error"
      });
    }
    if (!result) {
      return res.status(400).json({
        error: "user not exist"
      });
    }
    if (!result.authenticate(req.body.password)) {
      return res.status(403).json({
        error: "email or password dont match"
      });
    }
    const token = jwt.sign({
      data: result._id
    }, config.jwtSecret, { expiresIn: '1h' });

    res.status(200).json({
      message: "login success",
      data: { token },
      success: true
    });
  });
};

const googleOAuth = async (req, res) => {
  const token = jwt.sign({
    data:req.user._id
  }, config.jwtSecret, { expiresIn: '1h' });
  return res.json({
    message: "login success",
    data: { token },
    success: true
  });
}

module.exports = {
  register: register,
  login: login,
  googleOAuth: googleOAuth
}

