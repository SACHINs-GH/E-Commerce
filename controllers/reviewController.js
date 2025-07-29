const Review = require('../models/reviewModel');
const validReviewSchema = require('../models/validateReview');

const reviewController = {
    // Add a review to a product
    createReview: async (req, res) => {
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

    // Delete a review
    deleteReview: async (req, res) => {
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

module.exports = reviewController;
