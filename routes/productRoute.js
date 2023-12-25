const express = require('express')
const Product = require('../models/productModel')
const {getProducts, getProduct, deleteProduct, createProduct, updateProduct}  = require('../controllers/productController')
const router = express.Router();

router.get('/', getProducts)

router.get('/:id', getProduct)

router.delete('/:id', deleteProduct)

// creates a route product which inserts products in mongodb database
router.post('/', createProduct)

//update a product
router.put('/:id', updateProduct)

module.exports = router