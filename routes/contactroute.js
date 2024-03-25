// routes/contactroute.js

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST request to save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await  newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
