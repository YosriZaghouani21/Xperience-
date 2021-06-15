const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const Preferences = require('../model/Preferences');
const User = require('../model/User');
const Experience = require('../../experienceService/models/Experience');

const secretOrkey = config.get('secretOrkey');
const RefreshToken = config.get('RefreshToken');

// Register User
exports.register = async (req, res) => {
  const {name, email, password, phoneNumber} = req.body;

  try {
    const searchRes = await User.findOne({email});
    if (searchRes)
      return res.status(401).json({msg: `Utilisateur existant , utiliser un autre E-mail`});

    const newUser = new User({
      name,
      email,
      password,
      phoneNumber,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({errors: error});
  }
};

// Login User

exports.login = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) return res.status(404).json({msg: `Email ou mot de passe incorrect`});
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({msg: `Email ou mot de passe incorrect`});

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
    // const RefreshToken = await jwt.sign(RefreshToken);
    const token = await jwt.sign(payload, secretOrkey);
    return res.status(200).json({token: `Bearer ${token}`, user});
  } catch (error) {
    res.status(500).json({errors: error});
  }
};
// Update User
exports.updateUser = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      birthday,
      adress,
      city,
      aboutMe,
      postalCode,
      myPreferences,
      photo,
      verif,
      falseIdentity,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phoneNumber,
      birthday,
      adress,
      city,
      aboutMe,
      postalCode,
      myPreferences,
      photo,
      verif,
      falseIdentity,
    });

    return res.status(201).json({
      msg: "L'utilisateur a été modifié avec succès",
      user: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
};

// Handle user roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    const user = User.findById(req.params.id);
    if (!roles.includes(user.role)) {
      return next(
        res.status(403).json({
          msg: `Role (${user.role}) is not allowed to acces this resource`,
        })
      );
    }
  };
};

// Get all users
exports.allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      succes: true,
      users,
    });
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
};

exports.seePreferences = async (req, res) => {
  try {
    const allPreferences = await Preferences.find();
    res.send(allPreferences);
  } catch (error) {
    res.status(500).json({errors: error.message});
  }
};

exports.addPreferences = async (req, res) => {
  const {themes, difficulties, phobies} = req.body;
  try {
    const newPref = new Preferences({
      themes,
      difficulties,
      phobies,
      usersID: req.user,
    });
    await newPref.save();
    res.status(201).json(newPref);
  } catch (error) {
    res.status(500).json({errors: error});
  }
};
// Add Preferences to a User (Themes)
exports.addMyPreferences = async (req, res) => {
  const userId = req.params.id;
  const {preferenceId, preferenceName} = req.body;

  try {
    const searchedUser = await User.findOne({_id: userId});
    console.log(searchedUser);
    searchedUser.myPreferences.push(preferenceId);
    const user = await User.findByIdAndUpdate(userId, searchedUser, {
      new: true,
      useFindAndModify: false,
    }).populate('preferences', 'themes');

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({errors: error.message});
  }
};
// getUserById
exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({status: 'success', user});
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({msg: 'utilisateur supprimé avec succès'});
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
};
exports.Paymentvalidation = (req, res) => {
  const history = [];
  const transactionData = {};

  // 1.Put brief Payment Information inside User Collection
  req.body.cartDetail.forEach(item => {
    history.push({
      dateOfPurchase: Date.now(),
      name: item.title,
      id: item._id,
      price: item.price,
      quantity: item.quantity,
      paymentId: req.body.paymentData.paymentID,
    });
  });

  // 2.Put Payment Information that come from Paypal into Payment Collection
  transactionData.user = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  transactionData.data = req.body.paymentData;
  transactionData.product = history;

  User.findOneAndUpdate(
    {_id: req.user._id},
    {$push: {history}, $set: {cart: []}},
    {new: true},
    (err, user) => {
      if (err) return res.json({success: false, err});

      const payment = new Payment(transactionData);
      payment.save((err, doc) => {
        if (err) return res.json({success: false, err});
      });
    }
  );
};

exports.comment = async (req, res) => {
  const commentId = req.params.id;
  const commentMod = {text: req.body.text, postedBy: req.user._id};
  try {
    const comment = await Experience.findByIdAndUpdate(
      commentId,
      {$push: {comments: commentMod}},
      {new: true, useFindAndModify: false}
    ).populate('comments.postedBy', 'name');
    res.send(comment);
  } catch (error) {
    console.error(error);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await comment.findByIdAndDelete(req.params.id);
    res.json({msg: 'commentaire supprimé avec succès'});
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
};

exports.like = async (req, res) => {
  const likeId = req.params.id;
  const likeMod = {postedBy: req.user._id};

  try {
    const like = await Experience.findByIdAndUpdate(
      likeId,
      {$push: {likes: likeMod}},
      {new: true, useFindAndModify: false}
    ).populate('likes.postedBy', 'name');
    res.send(like);
  } catch (error) {
    console.error(error);
  }
};

exports.unlike = async (req, res) => {
  const likeId = req.params.id;
  const likeMod = {postedBy: req.user._id};
  try {
    const like = await Experience.findByIdAndUpdate(
      likeId,
      {$pull: {likes: likeMod}},
      {new: true, useFindAndModify: false}
    ).populate('likes.postedBy', 'name');
    res.send(like);
  } catch (error) {
    console.error(error);
  }
};

exports.rating = async (req, res) => {
  const ratingId = req.params.id;
  const ratingMod = {newRating: req.body.newRating, postedBy: req.user._id};

  try {
    const rating = await Experience.findByIdAndUpdate(
      ratingId,
      {$push: {ratings: ratingMod}},
      {new: true, useFindAndModify: false}
    ).populate('ratings.postedBy', 'name');
    res.send(rating);
  } catch (error) {
    console.error(error);
  }
};
