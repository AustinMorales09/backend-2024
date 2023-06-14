const router = require('express').Router();
let Attractions = require('../models/art/attractions.model')

router.route('/').get((req, res) => {
    Attractions.find()
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

    const newAttractions = new Attractions ({
        name,
        description,
        imgUrl,
        address,
        website,
        category,
        familyFriendly
    });

    newAttractions.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req,res) => {
    Attractions.findByIdAndDelete(req.params.id)
        .then(() => res.json('Attraction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    Attractions.findById(req.params.id)
    .then(attractions => {
        attractions.name = req.body.name;
        attractions.description = req.body.description;
        attractions.imgUrl= req.body.imgUrl
        attractions.address = req.body.address;
        attractions.website = req.body.website;;
        attractions.category = req.body.category
        attractions.familyFriendly = req.body.familyFriendly

      exercise.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
