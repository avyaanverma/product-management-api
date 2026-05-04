const express = require('express');

const productRouter = express.Router();

let products = [{
    id: 1,
    name: 'Product 1',
    description: 'Product 1',
}];

// get all products
productRouter.get('/', (req,res)=>{
    res.json({
        message: "Successfully Fetched Products",
        products
    })
})

// create products
productRouter.post('/', (req,res)=>{
    const {name, price, description, category, stock, createdAt} = req.body;
    const product = {
        name,
        price,
        description,
        category,
        stock,
        createdAt : Date.now()
    }
    products.push(product);

    res.json({
        message: "Successfully Created Product",
        product
    })
})


// get single product by id
productRouter.get('/:id', (req,res)=>{
    const {id} = req.params;

    const product = products.find((prod)=> {
        return prod.id === id;
    })

    return res.json({
        message: "Successfully Fetched Product",
        product
    })
})

// update product by id
productRouter.put('/:id', (req,res)=>{
    const {id} = req.params;

    const updatedProduct = req.body;

    products = products.map((prod)=>{
        if(prod.id === id){
            prod = {...prod, ...updatedProduct};
        }
    })

    return res.json({
        message: "Successfully Updated Product",
        product
    })
})

// delete product by id
productRouter.delete('/:id', (req,res)=>{
    const {id} = req.params;

    products = products.filter((prod)=> prod.id !== id);
})


module.exports = productRouter;
