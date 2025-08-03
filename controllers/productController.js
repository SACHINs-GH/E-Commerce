const Product = require('../models/productModel');
const Review = require('../models/reviewModel');
const validProductSchema = require('../models/validateProduct');
const validReviewSchema = require('../models/validateReview');

const productController = {
    // Display all products on homepage
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find({});
            res.render('products/home.ejs', { products });
        } catch (error) {
            req.flash('error', 'Failed to load products');
            console.log("Error in show all products route", error);
            res.redirect('back');
        }
    },

    // Display single product details with reviews
    getProductDetails: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            const reviews = await Review.find({ product: req.params.id });
            res.render('products/showProduct.ejs', { product, reviews });
        } catch (error) {
            req.flash('error', 'Failed to load product details');
            console.log("Error in show single product route", error);
            res.redirect('back');
        }
    },

    // Show form to add new product
    showAddProductForm: (req, res) => {
        res.render('products/addProduct.ejs');
    },

    // Create a new product
    createProduct: async (req, res) => {
        try {
            const { error } = validProductSchema.validate(req.body);
            if (error) {
                req.flash('error', 'Invalid Product Details');
                return res.status(400).send(error.details[0].message);
            }
            await Product.create(req.body);
            req.flash('success', 'Product added successfully');
            res.redirect('/p/products');
        } catch (error) {
            req.flash('error', 'Failed to add product');
            console.log("Error in add Product route", error);
            res.redirect('back');
        }
    },

    // Show form to edit product
    showEditProductForm: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.render('products/editProduct.ejs', { product });
        } catch (error) {
            req.flash('error', 'Failed to load product for editing');
            console.log("Error in update product form route", error);
            res.redirect('back');
        }
    },

    // Update existing product
    updateProduct: async (req, res) => {
        try {
            const { error } = validProductSchema.validate(req.body);
            if (error) {
                req.flash('error', 'Invalid Product Details');
                return res.status(400).send(error.details[0].message);
            }
            await Product.findByIdAndUpdate(req.params.id, req.body);
            req.flash('success', 'Product updated successfully');
            res.redirect('/p/products');
        } catch (error) {
            req.flash('error', 'Failed to update product');
            console.log("Error in update product route", error);
            res.redirect('back');
        }
    },

    // Delete a product
    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            await Review.deleteMany({product : req.params.id});
            req.flash('success', 'Product deleted successfully');
            res.redirect('/p/products');
        } catch (error) {
            req.flash('error', 'Failed to delete product');
            console.log("Error in delete product route", error);
            res.redirect('back');
        }
    },

    // Add a review to a product
    addProductReview: async (req, res) => {
        try {
            const { error } = validReviewSchema.validate(req.body);
            if (error) {
                req.flash('error', 'Invalid Review Details');
                return res.status(400).send(error.details[0].message);
            }
            await Review.create(req.body);
            req.flash('success', 'Review added successfully');
            res.redirect(`/p/products/single/${req.body.product}`);
        } catch (error) {
            req.flash('error', 'Failed to add review');
            console.log("Error in add review route", error);
            res.redirect('back');
        }
    },

    // Delete a product review
    deleteProductReview: async (req, res) => {
        try {
            await Review.findByIdAndDelete(req.params.id);
            req.flash('success', 'Review deleted successfully');
            res.redirect('back');
        } catch (error) {
            req.flash('error', 'Failed to delete review');
            console.log("Error in delete review route", error);
            res.redirect('back');
        }
    }
};

module.exports = productController;