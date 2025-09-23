// =================================================================
// 1. REQUIRE PACKAGES
// =================================================================
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const multer = require('multer');
const MongoStore = require('connect-mongo');

// --- Models ---
const User = require('./models/user.js');
const Listing = require("./models/listing.js");

// --- Cloudinary ---
const { storage, cloudinary } = require('./cloudinary');
const upload = multer({ storage });


// =================================================================
// 2. DATABASE CONNECTION & SERVER START
// =================================================================
const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/JanConnect";
const secret = process.env.SECRET || 'a-super-secret-string';

async function main() {
    await mongoose.connect(dbUrl);
}

main()
    .then(() => {
        console.log("Connected to DB");
        app.listen(8080, () => {
            console.log("Server is listening on port 8080");
        });
    })
    .catch(err => console.log("DB CONNECTION ERROR:", err));


// =================================================================
// 3. APP CONFIGURATION & MIDDLEWARE
// =================================================================
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

// --- Session Store Configuration ---
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: secret
    },
    touchAfter: 24 * 3600 // Resave session only once every 24 hours unless it's changed
});

store.on("error", (err) => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store: store,
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash());

// --- Passport Authentication Setup ---
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// --- Global Middleware for Flash Messages & User Info ---
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});


// =================================================================
// 4. AUTHORIZATION MIDDLEWARE
// =================================================================
const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in to do that.');
        return res.redirect('/login');
    }
    next();
};

const isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that.');
        return res.redirect(`/listings/${id}`);
    }
    next();
};


// =================================================================
// 5. ROUTES
// =================================================================

// --- General Routes ---
app.get("/", (req, res) => {
    res.render("listings/home.ejs");
});

// --- Listing Routes ---

// Index Route (Show all complaints)
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({}).sort({ date: -1 });
    res.render("listings/index.ejs", { allListings });
});

// New Route (Show form to create a new complaint)
app.get("/listings/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

// Create Route (Handle creation of a new complaint)
app.post("/listings", isLoggedIn, upload.single('listing[image]'), async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.author = req.user._id;
    newListing.image = req.file.path;
    await newListing.save();
    req.flash('success', 'New complaint registered!');
    res.redirect("/listings");
});

// Show Route (Show details of a single complaint)
app.get("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate('author');
    if (!listing) {
        req.flash('error', 'Cannot find that complaint!');
        return res.redirect('/listings');
    }
    res.render("listings/show.ejs", { listing });
});

// Edit Route (Show form to edit a complaint)
app.get("/listings/:id/edit", isLoggedIn, isOwner, async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Cannot find that complaint!');
        return res.redirect('/listings');
    }
    res.render("listings/edit.ejs", { listing });
});

// Update Route (Handle update of a complaint)
app.put("/listings/:id", isLoggedIn, isOwner, upload.single('listing[image]'), async (req, res) => {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (req.file) {
        updatedListing.image = req.file.path;
        await updatedListing.save();
    }
    req.flash('success', 'Complaint successfully updated.');
    res.redirect(`/listings/${id}`);
});

// Delete Route (Handle deletion of a complaint)
app.delete("/listings/:id", isLoggedIn, isOwner, async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (listing && listing.image) {
        try {
            const publicId = listing.image.split('/').slice(-2).join('/').split('.')[0];
            await cloudinary.uploader.destroy(publicId);
        } catch (error) {
            console.error("Error deleting image from Cloudinary:", error);
        }
    }
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Complaint successfully deleted.');
    res.redirect("/listings");
});

// Report/Endorse Route
app.post('/listings/:id/report', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const userId = req.user._id;
    const reportIndex = listing.reports.indexOf(userId);

    if (reportIndex === -1) {
        listing.reports.push(userId);
    } else {
        listing.reports.splice(reportIndex, 1);
    }
    await listing.save();
    res.redirect(`/listings/${id}`);
});

// --- Authentication Routes ---

// Show signup form
app.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

// Handle signup logic
app.post('/signup', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to JanConnect!');
            const redirectUrl = req.session.returnTo || '/listings';
            delete req.session.returnTo;
            req.session.save(() => {
                res.redirect(redirectUrl);
            });
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
});

// Show login form
app.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

// Handle login logic
app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/listings';
    delete req.session.returnTo;
    req.session.save(() => {
        res.redirect(redirectUrl);
    });
});

// Handle logout
app.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success', 'You have been logged out.');
        res.redirect('/listings');
    });
});


// =================================================================
// 6. ERROR HANDLING
// =================================================================
app.all('*', (req, res, next) => {
    res.status(404).send("Page Not Found!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    req.flash('error', 'Something went wrong!');
    res.redirect('/listings');
});
