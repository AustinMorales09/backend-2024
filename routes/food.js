const router = require('express').Router();
let Food = require('../models/art/food.model')

router.route('/').get((req, res) => {
    Food.find()
        .then(arts => res.json(arts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name
    const description = req.body.description
    const imgUrl = req.body.imgUrl;
    const address = req.body.address;
    const website = req.body.website
    const category = req.body.category
    const familyFriendly = req.body.familyFriendly

    const newFood = new Food ({
        name,
        description,
        imgUrl,
        address,
        website,
        category,
        familyFriendly
    });

    newFood.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req,res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(() => res.json('Attraction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    Food.findById(req.params.id)
    .then(food => {
      food.name = req.body.name;
      food.description = req.body.description;
      food.imgUrl= req.body.imgUrl
      food.address = req.body.address;
      food.website = req.body.website;
      food.category = req.body.category
      food.familyFriendly = req.body.familyFriendly

      exercise.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
