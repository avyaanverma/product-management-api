const express = require('express');
const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
} = require('../controllers/product.controller.js')
const productRouter = express.Router();

// get all products
productRouter.get('/', getAllProducts)

// create products
productRouter.post('/', createProduct)


// get single product by id
productRouter.get('/:id', getProductById)

// update product by id
productRouter.put('/:id', updateProductById)

// delete product by id
productRouter.delete('/:id', deleteProductById)


module.exports = productRouter;
