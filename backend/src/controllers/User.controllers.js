

const { User, Person, sequelize, Calificaciones } = require('../../models')
const bycrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
import { QueryTypes } from 'sequelize';


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





// CALIFICACIONES
export const postCalificaciones = async (req, res) => {
    const {
        lengua_española, 
        matematicas, 
        ciencias_naturales, 
        ciencias_sociales, 
        ingles, 
        fihr, 
        educacion_artistica, 
        educacion_fisica, 
        total, 
        EstudianteId, 
        ProfesorId,} = req.body

    const newC = await sequelize.query(`INSERT INTO calificaciones (lengua_española, matematicas, ciencias_naturales, ciencias_sociales, ingles, fihr, educacion_artistica, educacion_fisica, total, EstudianteId, ProfesorId, PeriodoId)
    SELECT ${lengua_española},${matematicas},${ciencias_naturales},${ciencias_sociales},${ingles},${fihr},${educacion_artistica},${educacion_fisica},${total},${EstudianteId},${ProfesorId}, p.id
    FROM periodos p
    LEFT JOIN (
      SELECT DISTINCT PeriodoId
      FROM Calificaciones
      WHERE EstudianteId = ${EstudianteId}
    ) c
    ON p.id = c.PeriodoId
    WHERE c.PeriodoId IS NULL
    LIMIT 1;
    `, {
        type: QueryTypes.INSERT,
        plain: true, // new option for inserting data
        returning: true, // new option for inserting data
        raw: true, // new option for inserting data
        mapToModel: false // changed from true
    })
    res.json(newC)
}


export const getCalificaciones = async (req, res) => {
    const listOfPerson = await Calificaciones.findAll()
    res.json(listOfPerson)
}

export const verifyP = async (req, res) => {
    const EstudianteId = req.params.id
    const sql = await sequelize.query(`SELECT p.*
    FROM Periodos p
    LEFT JOIN (
      SELECT DISTINCT PeriodoId
      FROM Calificaciones
      WHERE EstudianteId = ${EstudianteId}
    ) c
    ON p.id = c.PeriodoId
    WHERE c.PeriodoId IS NULL
    LIMIT 1;`, {
        model: Calificaciones
    })

    res.json(sql)
}

export const getGrades = async(req, res) => {
    const EstudianteId = req.params.id
    const query = await Calificaciones.findOne({ where: {
        EstudianteId: EstudianteId
    }})
    res.json(query)
}