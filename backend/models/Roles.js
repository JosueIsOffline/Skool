module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("Roles", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Roles.associate = (models) => {
        Roles.hasMany(models.Per_rol, {
             onDelete: "cascade"
         })
     }

    return Roles
}