var evento = require('../models').Evento;

module.exports = {
    //lista de eventos
    index(req, res) {
        evento.findAll()
        .then(function(eventos) {
            res.status(200).json(eventos);
        })
        .catch(function(error) {
            res.status(500).json(eventos);
        });
    },
    //retornar un evento
    show(req, res) {
        evento.findById(req.params.id, {})
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(evento);
        });
    },
    create(req, res) {
        evento.create(req.body)
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(evento);
        });
    },
    update(req, res) {
        evento.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(evento);
        });
    },
    delete(req, res) {
        evento.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(evento) {
            res.status(200).json(evento);
        })
        .catch(function(error) {
            res.status(500).json(evento);
        });
    }
};