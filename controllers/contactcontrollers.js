// controllers/contactcontrollers.js

const Contact = require('../models/Contact')

//get all products
const getContact = async (req, res) => {
    const contact = await Contact.find({}).sort({createdAt: -1}) //so that newest pets are at the top
    res.status(200).json(contact)
}


// create new product
const createContact = async (req, res) =>{
    const { name, email, message } = req.body

    // add doc to db
    try{
        const contact = await Contact.create({ name, email, message })
        res.status(200).json(contact)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createContact,
    getContact,
   
}