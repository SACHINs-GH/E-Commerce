const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

// User Authentication Routes
router.get('/login', userController.showLoginForm);
router.get('/signup', userController.showSignupForm);
router.post('/authenticate', passport.authenticate('local', { failureRedirect: '/u/login' }), userController.authenticateUser);
router.post('/logout', userController.logoutUser);
router.post('/signup/create', userController.registerUser);

module.exports = router;