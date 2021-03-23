var express = require('express');
var router = express.Router();
const Product = require('./product/router');
const Provider = require('./provider/router');
const Category = require('./category/router');

router.use('/products', Product); 
router.use('/providers', Provider); 
router.use('/categories', Category); 

module.exports = router;