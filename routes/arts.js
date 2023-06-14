const router = require('express').Router();
let Arts = require('../models/art/arts.model')

router.route('/').get((req, res) => {
    Arts.find()
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

    const newArts = new Arts ({
        name,
        description,
        imgUrl,
        address,
        website,
        category,
        familyFriendly
    });

    newArts.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req,res) => {
    Arts.findByIdAndDelete(req.params.id)
        .then(() => res.json('Attraction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    Arts.findById(req.params.id)
    .then(arts => {
      arts.name = req.body.name;
      arts.description = req.body.description;
      arts.imgUrl= req.body.imgUrl
      arts.address = req.body.address;
      arts.website = req.body.website;;
      arts.category = req.body.category
      arts.familyFriendly = req.body.familyFriendly

      exercise.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;

