const express = require('express');
const{
    createProducts,
    getProducts,
} = require('../controllers/productcontrollers')
const router = express.Router();

// GET all workouts
router.get('/', getProducts) 

// POST a new workout
router.post('/', createProducts)


module.exports = router