require('dotenv').config();
const mongoose = require("mongoose");
const initData = require("./data.js"); // This now correctly refers to the exported array
const Listing = require("../models/listing.js");

const dbUrl = process.env.MONGO_URL;

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
  await Listing.deleteMany({});
  console.log("Existing data deleted");
  await Listing.insertMany(initData); // This will now work correctly
  console.log("Data was initialized");
  mongoose.connection.close();
};