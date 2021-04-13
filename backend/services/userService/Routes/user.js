const express = require("express");
const router = require("express").Router();
const multer = require("multer");
const {
  register,
  login,
  updateUser,
  authorizeRoles,
  allUsers,
  seePreferences,
  addPreferences,
  addMyPreferences,
} = require("../controllers/user.controller");
const { registerRules, validator } = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const Router = express.Router();

Router.post("/register", registerRules(), validator, register);
Router.post("/login", login);

Router.get("/current", isAuth(), (req, res) => {
  console.log("req", req);
  res.json(req.user);
});

Router.put("/profile/:id", updateUser);

Router.get("/users/:id", authorizeRoles(`admin`), allUsers);
Router.get("/preferences", seePreferences);
Router.post("/preferences/add", addPreferences);
Router.put("/mypreferences/:id", addMyPreferences);

//////////////////////////////////////////////
////////////////Upload files/////////////////
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/profile/:id").post(upload.single("photo"), (req, res) => {
  const photo = req.file.filename;

  const newUserData = {
    photo,
  };

  const newUser = new User(newUserData);

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = Router;
