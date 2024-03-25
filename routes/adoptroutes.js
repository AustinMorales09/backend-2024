const express = require('express');
const{
    createPet,
    getPets,
   

} = require('../controllers/shopcontrollers')
const router = express.Router();

// GET all workouts
router.get('/', getPets) 

// POST a new workout
router.post('/', createPet)


module.exports = router