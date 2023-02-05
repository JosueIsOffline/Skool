const { Router } = require('express')
const router = Router()
const { getPeople, postPerson } = require('../controllers/People.controller')

//People
router.get('/people', getPeople)
router.post('/people', postPerson)

export default router