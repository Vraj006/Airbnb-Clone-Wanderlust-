const express = require("express");
const router = express.Router();
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");

const listingcontroller=require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
//Index route
.get(wrapAsync(listingcontroller.index))
//Add route
.post(isLoggedIn,upload.single("listing[image]"),validateListing, wrapAsync(listingcontroller.createListing));

//New Route
router.get("/new",isLoggedIn,listingcontroller.renderNewForm);

// search route
router.get("/search",listingcontroller.searchListing)

router.route("/:id")
//Show route
.get(wrapAsync(listingcontroller.showListings))
//update route
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing, wrapAsync(listingcontroller.updateListing))    
//Delete route
.delete(isLoggedIn,isOwner,wrapAsync(listingcontroller.destroyListing));

//edit route
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(listingcontroller.renderEditForm));


module.exports=router;