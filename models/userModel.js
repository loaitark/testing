const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

//2-Create model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
