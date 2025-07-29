const User = require('../models/userModel');
const validUserSchema = require('../models/validateUser');
const passport = require('passport');

const userController = {
    // Display login form
    showLoginForm: (req, res) => {
        res.render('users/login.ejs');
    },

    // Display signup form
    showSignupForm: (req, res) => {
        res.render('users/signup.ejs');
    },

    // Handle user authentication
    authenticateUser: (req, res) => {
        req.flash('success', 'Login Successful!');
        res.redirect('/p/products');
    },

    // Handle user logout
    logoutUser: (req, res, next) => {
        req.logout((err) => {
            if (err) return next(err);
            req.flash('success', 'Logged Out Successfully!');
            res.redirect('/u/login');
        });
    },

    // Register new user
    registerUser: async (req, res) => {
        try {
            const { err } = validUserSchema.validate(req.body);
            if (err) {
                req.flash('error', `${err}`);
                return res.status(400).json({ message: "Invalid Details" });
            }
            const { username, email, password, userType } = req.body;
            const user = new User({ username, email, userType });
            await User.register(user, password);
            res.redirect('/u/login');
        } catch (error) {
            req.flash('error', `${error}`);
            res.redirect('back');
        }
    }
};

module.exports = userController;