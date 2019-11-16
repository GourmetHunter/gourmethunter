const User = require("../models/user.model");

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

<<<<<<< HEAD
      user.save(err => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: "error"
          });
=======
            user.save((err) => {
                if (err) {

                    return res.status(400).json({
                        error: 'error'
                    })
                }

                res.status(200).json({
                    message: "Successfully signed up!"
                })
            })
>>>>>>> back
        }
        res.status(200).json({
          message: "Successfully signed up!"
        });
      });
    }
  });
};

<<<<<<< HEAD
module.exports = {
  register: register
};
=======
const login = (req, res) => {
    User.findOne({ "local.email": req.body.email }, (err, result) => {
        if (err) {
            return res.status(400).json({
                error: 'error'
            });
        }
        console.log(result)
        if (!result) {
            console.log('alo');
            return res.status(400).json({
                error: 'user khong ton tai'
            })
        }
        else {
            if (!result.authenticate(req.body.password)) {
                return res.status(403).json({
                    error: 'sai mat khau'
                })
            }
            else {
                res.status(200).json({
                    message: 'ok'
                })
            }
        }
    })
}

module.exports = {
    register: register,
    login: login
}
>>>>>>> back
