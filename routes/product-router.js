const express = require('express')
const router = express.Router()

const Products = require('../controllers/product-controller.js')

router.get('/', Products.showProducts)
router.get('/add', Products.addProduct)
router.post('/add', Products.addProductPost)
router.get('/category/:category_id', Products.showCategoryByParams)
router.get('/:product_id/discontinued', Products.updateProductDiscontinued)
router.get('/discontinued', Products.showProductsDiscontinued)
router.get('/discontinued/:product_id/remove', Products.delProductDiscontinued)

module.exports = router