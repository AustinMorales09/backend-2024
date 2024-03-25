// routes/home.js

const express = require('express');
const router = express.Router();

const Home = require('../models/Home');

// GET request to fetch homepage content
router.get('/', (req, res) => {
  Home.findOne()
    .then(home => {
      if (!home) {
        return res.status(404).json({ nohomefound: 'No homepage content found' });
      }
      res.json(home);
    })
    .catch(err => res.status(500).json(err));
});
