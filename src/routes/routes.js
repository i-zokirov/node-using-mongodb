const express = require('express');
const router = express.Router()
const { addnewProduct } = require('../controllers/controllers')
router.get('/products', (req, res) => {
    res.render('newProductForm')
})
router.post('/products', (req, res) => {
    addnewProduct(req, res)
})

module.exports = router