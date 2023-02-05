const { User, Person } = require('../../models')
const bycrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')


export const postUser = async (req, res) => {
    const { correo, clave, PersonId, RoleId }= req.body
    await bycrypt.hash(clave, 10).then((hash) => {
         User.create({
            correo: correo,
            clave: hash,
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