const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const favouritesController = require('../controllers/favouritesController');
const reviewController = require('../controllers/reviewController');
const { isLoggedIn, isSeller } = require('../middlewares/authentication');

// Product Routes
router.get('/products', productController.getAllProducts);
router.get('/products/single/:id', isLoggedIn, productController.getProductDetails);
router.get('/products/new', isLoggedIn, isSeller, productController.showAddProductForm);
router.post('/products/add', isLoggedIn, isSeller, productController.createProduct);
router.get('/products/edit/:id', isLoggedIn, isSeller, productController.showEditProductForm);
router.patch('/products/update/:id', isLoggedIn, isSeller, productController.updateProduct);
router.delete('/products/delete/:id', isLoggedIn, isSeller, productController.deleteProduct);

// Review Routes
router.post('/reviews/add', isLoggedIn, reviewController.createReview);
router.delete('/reviews/delete/:id', isLoggedIn, reviewController.deleteReview);

// Cart Routes
router.get('/cart', isLoggedIn, cartController.getCartItems);
router.post('/cart/add/:id', isLoggedIn, cartController.addToCart);
router.post('/cart/remove/:id', isLoggedIn, cartController.removeFromCart);

// Favourites Routes
router.get('/favourites', isLoggedIn, favouritesController.getFavouriteProducts);
router.get('/favourites/new/:id', isLoggedIn, favouritesController.toggleFavouriteStatus);
router.get('/favourites/add/:id', isLoggedIn, favouritesController.addToFavourites);
router.get('/favourites/remove/:id', isLoggedIn, favouritesController.removeFromFavourites);

module.exports = router;