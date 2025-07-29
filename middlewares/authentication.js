const isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        return res.redirect('/u/login');
    }
    next();
}

const isSeller = (req, res, next) => {
    if (req.user && req.user.userType === 'seller') {
        return next();
    }
    return res.redirect('back');
};

module.exports={isLoggedIn,isSeller};