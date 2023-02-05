const { Router } = require('express')
const router = Router()
const { postUser, loginUser, Home } = require('../controllers/User.controllers')

//user 
router.post('/auth', postUser)
router.post('/auth/login', loginUser)

export default router