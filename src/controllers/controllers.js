const mongoose = require('mongoose')
const productSchema = require('../models/model')

const Product = mongoose.model('Product', productSchema)

const addnewProduct = (req, res) => {
    console.log(req.body)
    const newProduct = new Product(req.body)
    newProduct.save((err, Product) => {
        if (err) {
            res.send(err)
        }
        res.json(Product)
    })
}

module.exports = { addnewProduct }