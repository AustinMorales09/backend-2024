const Pets = require('../models/adopt')

//get all pets
const getPets = async (req, res) => {
    const pets = await Pets.find({}).sort({createdAt: -1}) //so that newest pets are at the top
    res.status(200).json(pets)
}


// create new pet
const createPet = async (req, res) =>{
    const {title, description, category, imageURL, price, date_added} = req.body

    // add doc to db
    try{
        const pet = await Pets.create({title, description, category, imageURL, price, date_added})
        res.status(200).json(pet)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createPet,
    getPets,
   
}