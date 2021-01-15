const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }

    Usuarios.init({
        nome: DataTypes.STRING,
        projeto: DataTypes.STRING
    }, {
        sequelize,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        tableName: 'usuarios',
        modelName: 'Usuarios'
    })

    return Usuarios
}
