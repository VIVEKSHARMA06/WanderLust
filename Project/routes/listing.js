const express = require('express');
const router = express.Router();
const Listing = require("../models/listing.js");    
const wrapAsync = require('../utils/wrapAsync.js');
const {isLoggedIn,isOwner,validateListing } = require('../middleware.js');
const multer  = require('multer');
const {storage,cloudinary} = require("../cloudConfig.js")
const upload = multer({storage});

//Edit Route
router.get('/:id/edit' ,isLoggedIn, isOwner, wrapAsync(async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error','Listing you requested for does not exist!');
        res.redirect('/listings');
    }
    res.render('./listings/edit.ejs', {listing});
}));

//Update Route
router.put('/:id', isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(async (req,res) => {
    let {id} =req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if (typeof req.file !== 'undefined') {
        await cloudinary.api.delete_resources([listing.image.filename], { type: 'upload', resource_type: 'image' });
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash('success','Listing updated');
    res.redirect(`/listings/${id}`);
}));


//Delete Route
router.delete('/:id' , isLoggedIn, isOwner, wrapAsync(async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndDelete(id);
    await cloudinary.api.delete_resources([listing.image.filename], { type: 'upload', resource_type: 'image' });
    req.flash('success','Listing deleted');
    res.redirect('/listings');        
}));


//Create Route
router.post('/',isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(async (req,res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash('success','New listing created');
    res.redirect('/listings');
}));

//New Route
router.get('/new', isLoggedIn, (req,res) => {
    res.render('./listings/new.ejs');
});


//Show Route
router.get('/:id', wrapAsync(async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id).populate({path : 'reviews', populate : {path : 'author'},}).populate('owner');
    if (!listing) {
        req.flash('error','Listing you requested for does not exist!');
        res.redirect('/listings');
    }
    res.render('./listings/show.ejs',{listing});
}));


//Index Route
router.get('/', wrapAsync(async (req,res) => {
    let allListings = await Listing.find({});
    res.render('./listings/index.ejs',{allListings});
}));

module.exports = router;