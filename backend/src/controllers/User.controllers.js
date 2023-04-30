const { User, Person, sequelize } = require('../../models')
const bycrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')


export const postUser = async (req, res) => {
    const { correo, clave, PersonId, RoleId, CursotallerId }= req.body
    await bycrypt.hash(clave, 10).then((hash) => {
         User.create({
            correo: correo,
            clave: hash,
            CursotallerId: CursotallerId,
            PersonId: PersonId,
            RoleId: RoleId
        })
        res.json('USUARIO CREADO CON EXITO!!')
    })
}

export const loginUser = async (req, res) => {
    const { correo, clave } = req.body

    const user = await User.findOne({ where: {
        correo: correo
    }})

    if(!user) {
        res.json({ error: 'User Doesn´t Exist' })
    }
    else{
        bycrypt.compare(clave, user.clave).then((match) => {
            if(!match) {
                res.json({ error: 'La combinacion de usuario y contraseña es incorrecto'})
            }
            else{
                const accessToken = sign({ correo: user.correo, id: user.id }, 
                    'importantscret'
                )
                //  Home(req, res, user.PersonId)
                // res.json(user.PersonId)
                // if(accessToken) {
                //     router.get('/home', Home(req, res, user.PersonId))
                // }

                res.json({
                    user: user,
                    token: accessToken
                })
            }
        })
    }
}

const Home =  async (req, res, id) => {
    const info =  await Person.findByPk(id)
    res.json({
        id: info.id,
        nombre: info.nombre,
        apellido: info.apellido
    })
}

export const listStudent = async (req, res) => {
    const id = req.params.id
    const students = await User.findAll({ where: {
        CursotallerId: id
    }
    })
    res.json(students)
}

export const counter = async (req, res) => {
    const count = await sequelize.query('SELECT COUNT(*) as total_student FROM users WHERE CursotallerId = 3', {
        model: User,
        mapToModel: true
    })
    res.json(count)
}