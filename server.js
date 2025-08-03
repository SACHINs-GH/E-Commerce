
require('dotenv').config();

const express=require('express');
const ejsmate = require('ejs-mate');
const methodOverride = require('method-override');
const path = require('path');
const app=express();
const PORT=process.env.PORT || 3000;
const session = require('express-session');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const connectDB = require('./database/db');
const passport = require('passport');
const LocalStrategy=require("passport-local");
const User = require('./models/userModel.js');
const flash = require('connect-flash');

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs',ejsmate);
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    secret : process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie : {
        httpOnly:true,
        maxAge: 3600000,
        secure: process.env.NODE_ENV === 'production',
        sameSite : 'strict'
    }
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

app.get('/',(req,res)=>{
    res.redirect('/p/products');
})

app.use((req,res,next)=>{
    res.locals.currUser=req.user;
    res.locals.success= req.flash('success');
    res.locals.error= req.flash('error');
    next();
})

app.use('/p',productRouter);
app.use('/u',userRouter);

connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on port : http://localhost:${PORT}`);    
})