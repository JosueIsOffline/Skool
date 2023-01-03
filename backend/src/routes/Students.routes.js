const { Router } = require('express')
const router = Router()
const { getStudents } = require('../controllers/Students.controller')

router.get('/students', getStudents)

export default router