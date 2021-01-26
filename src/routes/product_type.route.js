const router = require('express').Router()
const awaitHandler = require('../middleware/awaitHandler.middleware')
const auth = require('../middleware/auth.middleware')
const ProductType = requrie('../controllers/ProductType.controller')

//get all 
router.get('/all', awaitHandler(ProductType.getAll))

//get one 
router.get('/:id', awaitHandler(ProductType.getById))

//create 
router.post('/create',auth(), awaitHandler(ProductType.create))

//edit
router.patch('/edit/:id',auth(), awaitHandler(ProductType.update))

//delete 
router.delete('/delete/:sid',auth() ,awaitHandler(ProductType.delete))