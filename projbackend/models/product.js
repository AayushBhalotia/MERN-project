const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//product Schema of a single product like a t shirt

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },

    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },

    //relationship

    category: {
      //Parent Schema
      type: ObjectId,
      ref: "Category",
      required: true,
    },

    //available products
    stock: {
      type: Number,
    },
    //units sold
    sold: {
      type: Number,
      default: 0,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
