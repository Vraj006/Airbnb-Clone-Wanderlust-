const express = require("express");
const router = express.Router();
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");

const listingFilterController=require("../controllers/filter.js");

router.get("/:id",wrapAsync(listingFilterController.showFilteredListing));

module.exports=router;