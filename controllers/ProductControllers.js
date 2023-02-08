const Product = require('../models/productModels');

const CreateProducts = async(req,res)=>{
    const {imageUrl,feature,name,category,price,size,color} = req.body;

    const productData = {
        imageUrl:imageUrl,
        feature:feature,
        name:name,
        category:category,
        price:price,
        size:size,
        color:color
    }

    try{
        const productdata =new Product(productData);
        const saveDate = productdata.save();

        return res.status(200).json({
            reason:'PRODUCT SUCESSFULLY CREATED',
            statuscode:200,
            status:'SUCCESS',
            dataObject:{
                userdetails:productdata
            }
        });
    }catch(err){
        res.status(500).json({message:err.message});
    }
}



const getProductDetail = async(req,res)=>{
    const {imageUrl,feature,name,category,price,size,color} = req.body;

    const productData = {
        imageUrl:imageUrl,
        feature:feature,
        name:name,
        category:category,
        price:price,
        size:size,
        color:color
    }

    try {
        const productDetail = await Product.findById(req.params.id);

        if(!productDetail){
            return res.status(304).json({
                reason: 'Product not found',
                status:'FAILED',
                statuscode:304,
            })
        }
        else{
            return res.status(200).json({
                reason: 'Product found successfully!!',
                status:'success',
                statuscode:200,
                dataObject:{
                    userdetails: productDetail
                }
            })
        }
    } catch (err) {
        res.status(500).json({message:err.message});
    }   
}

const getAllProductsDetail = async(req,res)=>{
    const {imageUrl,feature,name,category,price,size,color} = req.body;

    const productData = {
        imageUrl:imageUrl,
        feature:feature,
        name:name,
        category:category,
        price:price,
        size:size,
        color:color
    }

    try {
        const productDetail = await Product.find();

       
            return res.status(200).json({
                reason: 'All Products found successfully!!',
                status:'success',
                statuscode:200,
                dataObject:{
                    userdetails: productDetail
                }
            })
    } catch (err) {
        res.status(500).json({message:err.message});
    }   
}


const updateProduct = async(req,res)=>{
    const {imageUrl,feature,name,category,price,size,color} = req.body;

    const productData = {
        imageUrl:imageUrl,
        feature:feature,
        name:name,
        category:category,
        price:price,
        size:size,
        color:color
    }

    try {
        const productDetail = await Product.findOneAndUpdate(productData);

        if(!productDetail){
            return res.status(304).json({
                reason: 'Product not found',
                status:'FAILED',
                statuscode:304,
            })
        }
        else{
            return res.status(200).json({
                reason: 'Product updated successfully!!',
                status:'success',
                statuscode:200
            })
        }
    } catch (err) {
        res.status(500).json({message:err.message});
    }
}



const DeleteProduct = async(req,res)=>{
    const {imageUrl,feature,name,category,price,size,color} = req.body;

    const productData = {
        imageUrl:imageUrl,
        feature:feature,
        name:name,
        category:category,
        price:price,
        size:size,
        color:color
    }

    try {
        const productDetail = await Product.findOneAndDelete(productData._id);

        if(!productDetail){
            return res.status(304).json({
                reason: 'Product not found',
                status:'FAILED',
                statuscode:304,
            })
        }
        else{
            return res.status(200).json({
                reason: 'Product deleted successfully!!',
                status:'success',
                statuscode:200,
            })
        }
    } catch (err) {
        res.status(500).json({message:err.message});
    }
}

module.exports = {CreateProducts,getProductDetail, getAllProductsDetail, updateProduct, DeleteProduct}