const Listing=require("../models/listing");

module.exports.showFilteredListing=async(req,res)=>{
    let {id}=req.params;
    const allListing = await Listing.find({ category: id });
    res.render("./listing/filter.ejs", { allListing,id});
}   