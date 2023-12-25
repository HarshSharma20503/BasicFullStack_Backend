const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const getProducts = asyncHandler(async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const getProduct = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message); // this doesnot work because of async function there fore you require express-async-handler
    }
});

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            res.status(404);
            throw new Error("cannot find product");
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const createProduct = asyncHandler(async(req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const updateProduct = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product)
        {
            res.status(404);
            throw new Error("cannot find product");
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);  
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts, getProduct, deleteProduct, createProduct, updateProduct
}