const { Router } = require('express')
const router = Router()
const { postUser, loginUser, listStudent, counter, getCalificaciones, postCalificaciones, verifyP, getGrades } = require('../controllers/User.controllers')


//user 
router.post('/auth', postUser)
router.post('/auth/login', loginUser)
router.get('/liststudents/:id', listStudent)
router.get('/counter', counter)

//calificaciones
router.get('/calificaciones', getCalificaciones)
router.post('/calificaciones', postCalificaciones)
router.get('/verifyp/:id', verifyP)
router.get('getgrades/:id', getGrades)

export default router