// routes/aboutroutes.js

const express = require('express');
const router = express.Router();

const AboutUs = require('../models/aboutUs');

// GET request to fetch homepage content
router.get('/', (req, res) => {
  Home.findOne()
    .then(aboutUs => {
      if (!aboutUs) {
        return res.status(404).json({ nohomefound: 'No homepage content found' });
      }
      res.json(aboutUs);
    })
    .catch(err => res.status(500).json(err));
});
