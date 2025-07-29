const favouritesController = {
    // Display user's favourite products
    getFavouriteProducts: async (req, res) => {
        try {
            const userData = await req.user.populate('favourites');
            const favourites = userData.favourites;
            res.render('products/favourites.ejs', { favourites });
        } catch (error) {
            req.flash('error', 'Failed to load favourites');
            console.log("Error in show favourites route", error);
            res.redirect('back');
        }
    },

    // Toggle favourite status (add or remove based on current state)
    toggleFavouriteStatus: (req, res) => {
        try {
            const { id } = req.params;
            if (req.user.favourites.find(product => product == id)) {
                res.redirect(`/p/favourites/remove/${id}`);
            } else {
                res.redirect(`/p/favourites/add/${id}`);
            }
        } catch (error) {
            req.flash('error', 'Failed while performing operations in favourites');
            console.log("Error in Favourites (toggle) ", error);
            res.redirect('back');
        }
    },

    // Add product to user's favourites
    addToFavourites: async (req, res) => {
        try {
            const { id } = req.params;
            req.user.favourites.push(id);
            await req.user.save();
            req.flash('success', 'Product added to favourites');
            res.redirect('back');
        } catch (error) {
            req.flash('error', 'Failed to add product to favourites');
            console.log("Error in add to favourites route", error);
            res.redirect('back');
        }
    },

    // Remove product from user's favourites
    removeFromFavourites: async (req, res) => {
        try {
            const { id: productId } = req.params;
            req.user.favourites = req.user.favourites.filter(item => item.toString() !== productId);
            await req.user.save();
            req.flash('success', 'Product removed from favourites');
            res.redirect('back');
        } catch (error) {
            req.flash('error', 'Failed to remove product from favourites');
            console.log("Error in remove from favourites route", error);
            res.redirect('back');
        }
    }
};

module.exports = favouritesController;
