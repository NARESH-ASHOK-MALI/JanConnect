const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.squarespace-cdn.com/content/v1/573365789f726693272dc91a/1704992146415-CI272VYXPALWT52IGLUB/AdobeStock_201419293.jpeg?format=1500w",
    set: (v) =>
      v === ""
        ? "https://images.squarespace-cdn.com/content/v1/573365789f726693272dc91a/1704992146415-CI272VYXPALWT52IGLUB/AdobeStock_201419293.jpeg?format=1500w"
        : v,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: String,
  city: String,
  author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
  },
  reports: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
