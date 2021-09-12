const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    created_date: { type: Date, default: Date.now }

})

module.exports = productSchema