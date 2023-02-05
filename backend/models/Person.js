module.exports = (sequelize, DataTypes) => {

    const Person = sequelize.define("Person", {
        n_identidad: {
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        f_nacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        sexo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Person.associate = (models) => {
        
        Person.hasOne(models.User, {
            onDelete: "cascade"
        })
    }


    return Person
}