var express = require('express');
var router = express.Router();
const { getProvider, getProviderProducts, createSupplier, deleteProvider } = require('./controller')
const { createSupplier_validator, getProvider_validator } = require('./controller')


router.get('/:id', getProvider_validator, getProvider);
router.post('/', createSupplier_validator, createSupplier);
router.get('/:id/products', getProvider_validator, getProviderProducts);
router.delete('/:id', getProvider_validator, deleteProvider);

module.exports = router;