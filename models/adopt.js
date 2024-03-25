// models/adopt.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Adopt = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('adopt', Adopt);