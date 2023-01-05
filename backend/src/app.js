const express = require("express")
const app = express()
import studentsRoutes from './routes/People.routes'

app.use(express.json())

// ROUTES

app.use(studentsRoutes)

export default app