const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');

//SignUp
router.get('/signup', (req,res) => {
    res.render('../views/users/signup.ejs');
});

router.post('/signup', wrapAsync(async (req,res) => {
    try {
        let {username,password,email} = req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password);
        req.login(registeredUser, (e) => {
            if (e) {
                return next(e);
            }
            req.flash('success',"Welcome to Wanderlust");
            res.redirect('/listings');
        });
    }
    catch(err) {
        req.flash('error',err.message);
        res.redirect('/signup');
    }
}));



//LogIn
router.get('/login', (req,res) => {
    res.render('../views/users/login.ejs');
});

router.post('/login', saveRedirectUrl, passport.authenticate("local", {failureRedirect : '/login', failureFlash : true}) ,async (req,res) => {
    req.flash('success','Welcome back to Wanderlust!');
    let redirectUrl = res.locals.redirectUrl || '/listings';
    res.redirect(redirectUrl);
});



//LogOut 
router.get('/logout' , (req,res,next) => {
    req.logOut((err) => {
        if (err) {
            next(err);
        }
        req.flash("success","Logged you out!");
        res.redirect('/listings');
    });
});

module.exports = router;