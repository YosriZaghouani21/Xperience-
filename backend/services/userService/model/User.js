const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {ObjectId} = mongoose.Schema.Types;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
  birthday: {
    type: Date,
  },
  adress: {
    type: String,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  history: {
    type: Array,
    default: [],
  },
  aboutMe: {
    type: String,
  },
  photo: {
    type: String,
  },
  myPreferences: [
    {
      type: Object,
    },
  ],

  verif: {type: Boolean, default: false},
  falseIdentity: {type: Boolean, default: true},

  myExperiences: [
    {
      type: ObjectId,
      ref: 'Experience',
    },
  ],
});

module.exports = User = mongoose.model('user', userSchema);
