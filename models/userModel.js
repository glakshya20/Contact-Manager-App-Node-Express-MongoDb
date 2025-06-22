const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Please add user name"] },
    email: {
      type: String,
      required: [true, "Please add email id "],
      unique: [true, "Email id already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
