const express = require('express')
const router = express.Router()

//get all user
router.get('/',)
//get one user
router.get('/:id')
//create user
router.post('/')
//login user
router.post('/login')
//delete
router.delete('/:id')
//update
router.patch('/:id')