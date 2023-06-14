const router = require('express').Router();
let Sports = require('../models/art/sports.model')

router.route('/').get((req, res) => {
    Sports.find()
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

    const newSports = new Sports ({
        name,
        description,
        imgUrl,
        address,
        website,
        category,
        familyFriendly
    });

    newSports.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req,res) => {
    Sports.findByIdAndDelete(req.params.id)
        .then(() => res.json('Attraction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    Sports.findById(req.params.id)
    .then(sports => {
      sports.name = req.body.name;
      sports.description = req.body.description;
      sports.imgUrl= req.body.imgUrl
      sports.address = req.body.address;
      sports.website = req.body.website;
      sports.category = req.body.category
      sports.familyFriendly = req.body.familyFriendly
      

      exercise.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
