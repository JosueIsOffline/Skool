module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("Roles", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Roles.associate = (models) => {
        Roles.hasMany(models.User, {
             onDelete: "cascade"
         })
     }

    return Roles
}