const Musicas = require('../models/Musica');

module.exports = {
    async create(req, res){
        const { link, image, description ,dataOkay } = req.body;
        const data = new Date(dataOkay).toDateString();

        const musica = await Musicas.create({link, image, description, data});
        if(!musica){
            return res.status(400).json({error: "dont created"})
        }

        return res.status(201).json(musica);
    },
    async index(req, res){
        const { id } = req.params;

        const musica = await Musicas.findByPk(id);

        if(!musica){
            return res.status(404).json({error: "music not found"})
        }

        return res.status(200).json(musica);
    },
    async all(req, res){
        const musicas = await Musicas.findAll();

        if(!musicas){
            return res.status(404).json({error: "musics not found!"})
        }

        return res.status(200).json(musicas);
    },
    async today(req, res){
        const dataToday = new Date();
        const dia = dataToday.getDate() - 1;
        const data = new Date(dataToday.getFullYear(), dataToday.getMonth() , dia).toDateString();
        
        const music = await Musicas.findAll({where : { data: data }})
        if(!music){
            return res.status(404).json({error: "music not foundt!"})            
        }
        return res.json({music});        
    },
}