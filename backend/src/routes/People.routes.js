const { Router } = require('express')
const router = Router()
const { getStudents, postPerson } = require('../controllers/People.controller')

router.get('/students', getStudents)
router.post('/students', postPerson)

export default router