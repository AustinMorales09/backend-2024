const router = require('express').Router();
let Family = require('../models/art/family.model')

router.route('/').get((req, res) => {
    Family.find()
        .then(family => res.json(family))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name
    const description = req.body.description
    const imgUrl = req.body.imgUrl;
    const address = req.body.address;
    const website = req.body.website;
    const category = req.body.category
    const familyFriendly = req.body.familyFriendly

    const newFamily = new Family ({
        name,
        description,
        imgUrl,
        address,
        website,
        category,
        familyFriendly
    });

    newFamily.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req,res) => {
    Family.findByIdAndDelete(req.params.id)
        .then(() => res.json('Attraction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    Family.findById(req.params.id)
    .then(family => {
      family.name = req.body.name;
      family.description = req.body.description;
      family.imgUrl= req.body.imgUrl
      family.address = req.body.address;
      family.website = req.body.website
      family.category = req.body.category
      family.familyFriendly = req.body.familyFriendly
      

      exercise.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
