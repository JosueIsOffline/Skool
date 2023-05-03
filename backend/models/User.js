module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clave: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    

    return User
}