const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productDescription: {
        type: String,
        required: true,
        trim: true
    },
    productPrice: {
        type: Number,
        required: true,
        min: 0
    },
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;