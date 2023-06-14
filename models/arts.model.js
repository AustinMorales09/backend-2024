const mongoose = require('mongoose');

const artsSchema = new mongoose.Schema({
  name: {type: String},
  description: {type: String},
  imgUrl:{type: String},
  address:{type: String},
  website:{type: String},
  category:{type: String},
  familyFriendly: {type: Boolean}
  // Add more fields as needed
});

const Arts = mongoose.model('Arts', artsSchema);

module.exports = Arts
