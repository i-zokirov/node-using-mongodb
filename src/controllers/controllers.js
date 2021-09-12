const mongoose = require('mongoose')
const productSchema = require('../models/model')

const Product = mongoose.model('Product', productSchema)

module.exports = addnewProduct = async() => {
    const newProduct = new Product(req.body)
    await newProduct.save()
}