const express = require("express")
const app = express()
import studentsRoutes from './routes/People.routes'
import userRoutes from './routes/User.routes'
const cors = require('cors')

app.use(express.json())
app.use(cors())

// ROUTES

app.use(studentsRoutes)
app.use(userRoutes)

export default app