const { Router } = require('express')
const router = Router()
const { getStudents, postStudents } = require('../controllers/People.controller')

router.get('/students', getStudents)
router.post('/students', postStudents)

export default router