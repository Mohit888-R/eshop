const express = require('express');
const router = express.Router();
const {CreateProducts,getProductDetail,getAllProductsDetail,updateProduct,DeleteProduct} = require('../controllers/ProductController');


router.post('/createProducts',CreateProducts);
router.get('/getProduct/:id',getProductDetail);
router.get('/getAllProducts',getAllProductsDetail);
router.put('/updateProduct/:id',updateProduct);
router.delete('/deleteProduct/:id',DeleteProduct);

module.exports = router;