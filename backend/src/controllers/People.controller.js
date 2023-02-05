const { Person } = require('../../models')

export const getPeople = async (req, res) => {
    const listOfPerson = await Person.findAll()
    res.json(listOfPerson)
}

export const postPerson = async (req, res) => {
    const postPerson = req.body
    await Person.create(postPerson)
    res.json(postPerson)
}