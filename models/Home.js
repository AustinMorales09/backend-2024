// models/Home.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Home = mongoose.model('home', HomeSchema);