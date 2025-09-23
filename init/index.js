// init/index.js
require('dotenv').config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/JanConnect";

main()
  .then(() => {
    console.log("Connected to DB");
    initDB();
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  // 1. Clear all existing data
  await Listing.deleteMany({});
  await User.deleteMany({});
  console.log("Existing data deleted");

  // 2. Create multiple dummy users
  const userCredentials = [
    { username: 'sampleuser', email: 'user1@example.com', password: 'password123' },
    { username: 'testuser1', email: 'user2@example.com', password: 'password123' },
    { username: 'testuser2', email: 'user3@example.com', password: 'password123' },
    { username: 'testuser3', email: 'user4@example.com', password: 'password123' },
  ];

  const createdUsers = [];
  for (let cred of userCredentials) {
    const user = new User({ username: cred.username, email: cred.email });
    const registeredUser = await User.register(user, cred.password);
    createdUsers.push(registeredUser);
    console.log(`Dummy user created: ${registeredUser.username}`);
  }

  // 3. The first user will be the author of all listings
  const owner = createdUsers[0];

  // 4. Add author and random reports to each listing
  const listingsWithData = initData.map(obj => {
    const newListing = { ...obj, author: owner._id };
    
    // Randomly add some of the other users to the reports array
    const reports = new Set(); // Use a Set to avoid duplicate reports
    const numReports = Math.floor(Math.random() * createdUsers.length); // 0 to max users
    for (let i = 0; i < numReports; i++) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      reports.add(createdUsers[randomUserIndex]._id);
    }
    
    newListing.reports = Array.from(reports);
    return newListing;
  });

  // 5. Insert the new listings into the database
  await Listing.insertMany(listingsWithData);
  console.log("Data was initialized with a default owner and sample reports.");
  
  mongoose.connection.close();
};