const cartController = {
    // Display user's cart
    getCartItems: async (req, res) => {
        try {
            const userData = await req.user.populate('cart');
            const cart = userData.cart;
            res.render('products/cart.ejs', { cart });
        } catch (error) {
            req.flash('error', 'Failed to load cart');
            console.log("Error in show cart route", error);
            res.redirect('back');
        }
    },

    // Add product to user's cart
    addToCart: async (req, res) => {
        try {
            const { id } = req.params;
            req.user.cart.push(id);
            await req.user.save();
            req.flash('success', 'Product added to cart');
            res.redirect('back');
        } catch (error) {
            req.flash('error', 'Failed to add product to cart');
            console.log("Error in add to cart route", error);
            res.redirect('back');
        }
    },

    // Remove product from user's cart
    removeFromCart: async (req, res) => {
        try {
            const { id: productId } = req.params;
            let found = false;
            req.user.cart = req.user.cart.filter(item => {
                if (item.toString() == productId && !found) {
                    found = true;
                    return false;
                }
                return true;
            });
            await req.user.save();
            req.flash('success', 'Product removed from cart');
            res.redirect('back');
        } catch (error) {
            req.flash('error', 'Failed to remove product from cart');
            console.log("Error in remove from cart route", error);
            res.redirect('back');
        }
    }
};

module.exports = cartController;
