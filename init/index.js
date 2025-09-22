const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.MONGO_URL; // Read the variable from Vercel


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}


const initDB = async () => {
  await Listing.deleteMany({});
  console.log("existing data deleted");
  await Listing.insertMany(initData);
  console.log("data was initialized");
};

initDB();