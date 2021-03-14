const { Model, DataTypes } = require('sequelize');

class Musica extends Model {
    static init(sequelize){
        super.init({
            link: DataTypes.STRING,
            Image: DataTypes.STRING,
            description: DataTypes.STRING,
            data: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Musica;