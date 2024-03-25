const Products = require('../models/products')

//get all products
const getProducts = async (req, res) => {
    const products = await Products.find({}).sort({createdAt: -1}) //so that newest pets are at the top
    res.status(200).json(products)
}


// create new product
const createProducts = async (req, res) =>{
    const {title, description, category, price, date_added} = req.body

    // add doc to db
    try{
        const products = await Products.create({title, description, category, price, date_added})
        res.status(200).json(products)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createProducts,
    getProducts,
   
}