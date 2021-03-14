const express = require('express');
const routes = express.Router();

const MusicaController = require('./controllers/MusicaController');

routes.get('/musics', MusicaController.all);
routes.get('/musics/:id', MusicaController.index);
routes.get('/music/today',MusicaController.today);
routes.post('/musics', MusicaController.create);



module.exports = routes;