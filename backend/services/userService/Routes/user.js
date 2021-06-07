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
  comment,
  like,
  deleteUser,
  rating,
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
Router.delete('/delete/:id', deleteUser);

Router.get('/users', allUsers);
Router.get('/preferences', seePreferences);
Router.post('/preferences/add', addPreferences);
Router.put('/mypreferences/:id', addMyPreferences);
Router.get('/user/:id', getSingleUser);

Router.post('/comment/:id', isAuth(), comment);

Router.put('/like/:id', isAuth(), like);
Router.post('/rating/:id', isAuth(), rating);
Router.post('/successBuy', Paymentvalidation);

module.exports = Router;
