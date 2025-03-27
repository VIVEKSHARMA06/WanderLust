const express = require('express');
const router = express.Router({ mergeParams: true });
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const Review = require('../models/review.js');
const {validateReview, isLoggedIn, isAuthor} = require('../middleware.js');

//Reviews
router.post('/', isLoggedIn , validateReview, wrapAsync(async (req,res,next) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await listing.save();
    await newReview.save();
    req.flash('success','New review created');
    res.redirect(`/listings/${req.params.id}`);
}));


//Delete Reviews
router.delete('/:reviewId', isLoggedIn, isAuthor, wrapAsync(async (req,res,next) => {
    let {id,reviewId}= req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Review deleted ');
    res.redirect(`/listings/${id}`);
}));


module.exports = router;