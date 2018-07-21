const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Mongoose User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isdoctor: {
    type: Boolean,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
