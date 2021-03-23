var express = require('express');
var router = express.Router();
const { getCategoryProductsPageAndSize } = require('./controller')
const { getCategoryProductsPageAndSize_validator } = require('./controller')


router.get('/:id/products', getCategoryProductsPageAndSize_validator, getCategoryProductsPageAndSize);

module.exports = router;