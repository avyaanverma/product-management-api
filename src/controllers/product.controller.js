const productModel = require('../models/product.model.js');

const getAllProducts = async (req,res)=>{
    const products = await productModel.find({});

    res.json({
        message: "Products fetched Successfully",
        products
    })
}
const createProduct = async (req,res)=>{
    try{
        const {name, description, category, price, stock, createdAt} = req.body;

        const product = await productModel.create({
            name,
            price,
            description,
            category,
            stock
        });

        return res.json({
            message: "Products fetched Successfully",
            product
        })
    } catch(e){
        return res.json({
            message: "Error occurred in creating product"
        })
    }

}
const getProductById = async (req,res)=>{
    const {id} = req.params;

    const product = await productModel.findById(id);

    res.json({
        message: "Products fetched Successfully",
        product
    })
}
const updateProductById = async (req,res)=>{
    const {id} = req.params;
    const product = await productModel.findByIdAndUpdate(id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock,
    }, {
            new: true
        })

    res.json({
        message: "Products fetched Successfully",
        product
    })
}

const deleteProductById = async (req,res)=>{
    const {id} = req.params;

    try{
        await productModel.findByIdAndDelete(id);
        return res.json({
            message: "Product deleted successfully.",
        })
    }catch(e){
        return res.json({
            message: "Error occurred in deleting product"
        })
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
}