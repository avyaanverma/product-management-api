const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    price: String,
    description: String,
    category: String,
    stock: String,
},{
    timestamps: true
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;

