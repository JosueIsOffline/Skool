const { Router } = require('express')
const router = Router()
const { postUser, loginUser, listStudent, counter } = require('../controllers/User.controllers')

//user 
router.post('/auth', postUser)
router.post('/auth/login', loginUser)
router.get('/liststudents/:id', listStudent)
router.get('/counter', counter)

export default router