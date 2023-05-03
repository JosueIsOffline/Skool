module.exports = (sequelize, DataTypes) => {

    const Calificaciones = sequelize.define("Calificaciones", {
        lengua_española: {
            type: DataTypes.STRING,
            allowNull: true
        },
        matematicas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ciencias_naturales: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ciencias_sociales: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ingles: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fihr: {
            type: DataTypes.STRING,
            allowNull: true
        },
        educacion_artistica: {
            type: DataTypes.STRING,
            allowNull: true
        },
        educacion_fisica: {
            type: DataTypes.STRING,
            allowNull: true
        },
        total: {
            type: DataTypes.STRING,
            allowNull: true
        },
        EstudianteId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ProfesorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })
    
    return Calificaciones
}