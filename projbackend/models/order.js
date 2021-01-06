const mongoose=require("mongoose");
const {ObjectId}= mongoose.Schema;

//individual products in cart
const ProductCartSchema=new mongoose.Schema({
    Product:{
        type:ObjectId,
        ref: "Product"
    },
    name:String,
    count:Number,
    price:Number
});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);



//array of product on a cart page
const OrderSchema = new mongoose.Schema({
    //array of products
    products:[ProductCartSchema],
    transaction_id:{},
    amount:{
        type:Number
    },
    address:String,
    updated:Date,
    user:{
        type:ObjectId,
        ref:"User"
    }

},{timestamps:true}
);

const Order = mongoose.model("Order", OrderSchema);

//exportion two schema at one go
module.exports = { Order, ProductCart };
