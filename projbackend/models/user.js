const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

//user collection
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    userinfo: {
      type: String,
      trim: true,
    },
    //password stored in encrypted form
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,

    role: {
      //different types of user
      type: Number,
      default: 0,
    },
    purchases: {
      //product pruches
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

//virtual fields
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4(); //generate uniquekey
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

// user methods
userSchema.methods = {
  //authentication
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  //encrypting the plain password
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

//exporting
module.exports = mongoose.model("User", userSchema);
