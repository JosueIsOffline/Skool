module.exports = (sequelize, DataTypes) => {
    
    const Periodos = sequelize.define("Periodos", {
        periodo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Periodos.associate = (models) => {

        Periodos.hasMany(models.Calificaciones, {
            onDelete: "cascade"
        })

    }

    return Periodos
}