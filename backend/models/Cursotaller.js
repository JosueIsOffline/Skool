module.exports = (sequelize, DataTypes) => {
    const Cursotaller = sequelize.define("Cursotaller", {

    })

    Cursotaller.associate = (models) => {
        Cursotaller.hasOne(models.User, {
            onDelete: "cascade"
        })
    }

    return Cursotaller
}