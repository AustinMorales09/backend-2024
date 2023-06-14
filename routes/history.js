const router = require('express').Router();
let History = require('../models/art/history.models')

router.route('/').get((req, res) => {
    History.find()
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

    const newHistory = new History ({
        name,
        description,
        imgUrl,
        address,
        website,
        category,
        familyFriendly
    });

    newHistory.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req,res) => {
    History.findByIdAndDelete(req.params.id)
        .then(() => res.json('Attraction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    History.findById(req.params.id)
    .then(history => {
      history.name = req.body.name;
      history.description = req.body.description;
      history.imgUrl= req.body.imgUrl
      history.address = req.body.address;
      history.website = req.body.website;
      history.category = req.body.category
      history.familyFriendly = req.body.familyFriendly

      exercise.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
