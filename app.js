require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const multer = require('multer');
const { storage, cloudinary } = require('./cloudinary'); // ✅ CORRECTED THIS LINE
const upload = multer({ storage });

const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/JanConnect";

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
    res.render("listings/home.ejs");
});

//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({}).sort({ date: -1 });
    res.render("listings/index.ejs", { allListings });
});

//New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

//Create Route (with file upload)
app.post("/listings", upload.single('listing[image]'), async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.image = req.file.path;
    await newListing.save();
    res.redirect("/listings");
});

//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

//Update Route (with file upload)
app.put("/listings/:id", upload.single('listing[image]'), async (req, res) => {
    let { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (req.file) {
        updatedListing.image = req.file.path;
        await updatedListing.save();
    }

    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (listing && listing.image) {
        try {
            const publicId = listing.image.split('/').slice(-2).join('/').split('.')[0];
            await cloudinary.uploader.destroy(publicId);
            console.log(`Deleted image from Cloudinary: ${publicId}`);
        } catch (error) {
            console.error("Error deleting image from Cloudinary:", error);
        }
    }

    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});