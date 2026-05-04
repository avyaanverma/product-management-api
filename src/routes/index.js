const express = require('express');
const productRoutes = require('./product.routes.js');

const appRouter = express.Router();

appRouter.use('/products', productRoutes);  

module.exports = appRouter;