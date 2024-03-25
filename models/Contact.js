// models/Contact.js

const mongoose = require('mongoose');

//creating mongoose schema
// const Schema = mongoose.Schema;

const Contact = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('contact', Contact);

