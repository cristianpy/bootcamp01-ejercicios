Evento = require('../models').Evento;
// Falta crear el modelo Ciudad, luego de eso descomentar las lineas correspondientes
//Ciudad = require('../models').Ciudad;

module.exports = {
    //Get a list of all eventos using model.findAll()
    index(req, res) {
        Evento.findAll({
            //include: Ciudad
        })
        .then(function(eventos) {
            res.status(200).json(eventos);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Get an evento by the unique ID using model.findById()
    show(req, res) {
        Evento.findById(req.params.id, {
           //include: Ciudad 
        })
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Create a new evento using model.create()
    create(req, res) {
        Evento.create(req.body)
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Edit an existing evento details using model.update()
    update(req, res) {
        Evento.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Delete an existing evento by the unique ID using model.destroy()
    delete(req, res) {
        Evento.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    }
};
