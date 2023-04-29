module.exports = (sequelize, DataTypes) => {

    const Person = sequelize.define("Person", {
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