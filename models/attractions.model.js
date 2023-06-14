const mongoose = require('mongoose');

const attractionsSchema = new mongoose.Schema({
  name: {type: String},
  description: {type: String},
  imgUrl:{type: String},
  address:{type: String},
  website:{type: String},
  category:{type: String},
  familyFriendly: {type: Boolean}
  // Add more fields as needed
});

const Attractions = mongoose.model('Attractions', attractionsSchema );

module.exports = Attractions