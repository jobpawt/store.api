const express = require('express')
const router = express.Router()
const awaitHandler =  require('../middleware/awaitHandler.middleware')
const StoreController = require('../controllers/store.controller')
const auth = require('../middleware/auth.middleware')

//get all 
router.get('/all', awaitHandler(StoreController.getAll))

//get one 
router.get('/:sid', awaitHandler(StoreController.getById))

//create 
router.post('/create',auth(), awaitHandler(StoreController.create))

//edit
router.patch('/edit/:sid',auth(), awaitHandler(StoreController.update) )
//delete 
router.delete('/delete/:sid',auth() ,awaitHandler(StoreController.delete))

module.exports = router