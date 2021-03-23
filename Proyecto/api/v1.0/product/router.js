var express = require('express');
var router = express.Router();
const { getProductsPageAndSize, getProductsSearch, createProduct } = require('./controller')
const { 
    getProductsPageAndSize_validator,
    getProductsSearch_validator,
    createProduct_validator
} = require('./controller')


router.get('/', getProductsPageAndSize_validator, getProductsPageAndSize);
router.post('/', createProduct_validator, createProduct);

router.get('/search', getProductsSearch_validator, getProductsSearch);

module.exports = router;