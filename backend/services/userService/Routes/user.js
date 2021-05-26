const express = require('express');
const {
  register,
  login,
  updateUser,
  authorizeRoles,
  allUsers,
  seePreferences,
  addPreferences,
  addMyPreferences,
  getSingleUser,

  Paymentvalidation,
} = require('../controllers/user.controller');

const {registerRules, validator} = require('../middleware/validator');
const isAuth = require('../middleware/passport-setup');

const Router = express.Router();

Router.post('/register', registerRules(), validator, register);
Router.post('/login', login);

Router.get('/current', isAuth(), (req, res) => {
  console.log('req', req);
  res.json(req.user);
});

Router.put('/profile/:id', updateUser);

Router.get('/users', allUsers);
Router.get('/preferences', seePreferences);
Router.post('/preferences/add', addPreferences);
Router.put('/mypreferences/:id', addMyPreferences);
Router.get('/user/:id', getSingleUser);

Router.put('/comment', isAuth(), (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdandUpdate(
    req.body.postId,
    {
      $push: {comments: comment},
    },
    {new: true}
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({error: err});
    } else {
      res.json(result);
    }
  });
});

Router.post('/successBuy', Paymentvalidation);

module.exports = Router;
