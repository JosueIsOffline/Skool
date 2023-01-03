const express = require("express")
const app = express()
import studentsRoutes from './routes/Students.routes'

// ROUTES

app.use(studentsRoutes)

export default app