const express = require('express')
const router = express.Router()
const awaitHandler =  require('../middleware/awaitHandler.middleware')
const productController = require('../controllers/product.controller')
const auth = require('../middleware/auth.middleware')

//get all products
router.get('/all', awaitHandler(productController.getAll))

//get one product
router.get('/:pid', awaitHandler(productController.getById))

//create product
router.post('/create',auth(), awaitHandler(productController.create))

//edit product
router.patch('/edit/:pid',auth(), awaitHandler(productController.update) )
//delete prodcut
router.delete('/delete/:pid',auth() ,awaitHandler(productController.delete))

module.exports = router