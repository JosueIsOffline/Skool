import app from './app'
const db = require('../models')


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server on port', 3001)
    })
})