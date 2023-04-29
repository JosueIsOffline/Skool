
module.exports = (sequelize, DataTypes) => {
    const Cursos = sequelize.define("Cursos", {
        n_curso: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Cursos.associate = (models) => {

        Cursos.hasMany(models.Cursotaller, {
            onDelete: "cascade"
        })
    }

    return Cursos
}