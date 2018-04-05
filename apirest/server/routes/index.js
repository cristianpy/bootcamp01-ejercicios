var eventos = require('../controllers/evento');

module.exports = function(router) {
    router.get('/eventos', eventos.index);
    router.get('/eventos/:id', eventos.show);
    router.post('/eventos', eventos.create);
    router.put('/eventos/:id', eventos.update);
    router.delete('/eventos/:id', evento.delete);

    return router;
};