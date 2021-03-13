const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Musica = require('../models/Musica');

const connection = new Sequelize(dbConfig);

Musica.init(connection);

module.exports = connection;