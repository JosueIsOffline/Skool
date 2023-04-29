module.exports = (sequelize, DataTypes) => {

    const Talleres = sequelize.define("Tallers", {
        t_nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Talleres.associate = (models) => {
        
        Talleres.hasMany(models.Cursotaller, {
            onDelete: "cascade"
        })
    }

    

    return Talleres
}