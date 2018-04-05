var eventos = require('../controllers/eventos');
var login = require('../controllers/login');
var usuarios = require('../controllers/usuarios');
var config = require('../oauth.js');
var Usuario = require('../models/usuario.js');
var passport = require('passport');
var fbAuth = require('../controllers/login');

// Todas las rutas de la aplicacion deben ser definidos en este archivo

module.exports = function (router) {
    // Eventos
    router.get('/eventos', eventos.index);
    router.get('/eventos/:id', eventos.show);
    router.post('/eventos', eventos.create);
    router.put('/eventos/:id', eventos.update);
    router.delete('/eventos', eventos.delete);

    // Login
    router.post('/usuario/login', login.loginUsuario);
    /*router.get('/', router.index);
    router.get('/ping', router.ping);*/
    router.get('/account', ensureAuthenticated, function (req, res) {
        Usuario.findById(req.session.passport.Usuario, function (err, Usuario) {
            if (err) {
                console.log(err);  // handle errors
            } else {
                res.render('account', { Usuario: Usuario });
            }
        });
    });

    router.get('/usuario/facebook',
        passport.authenticate('facebook'),
        function (req, res) { });
    router.get('/usuario/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/' }),
        function (req, res) {
            res.redirect('/account');
        });

    router.get('/usuario/twitter',
        passport.authenticate('twitter'),
        function (req, res) { });
    router.get('/usuario/twitter/callback',
        passport.authenticate('twitter', { failureRedirect: '/' }),
        function (req, res) {
            res.redirect('/account');
        });

    router.get('/usuario/github',
        passport.authenticate('github'),
        function (req, res) { });
    router.get('/usuario/github/callback',
        passport.authenticate('github', { failureRedirect: '/' }),
        function (req, res) {
            console.log("redirect");
            
            res.redirect('/home');
        });

    router.get('/usuario/google',
        passport.authenticate('google', {
            scope: [
                'https://www.googleapis.com/usuario/plus.login',
                'https://www.googleapis.com/usuario/plus.profile.emails.read'
            ]
        }
        ));
    router.get('/usuario/google/callback',
        passport.authenticate('google', { failureRedirect: '/' }),
        function (req, res) {
            res.redirect('/account');
        });

    router.get('/usuario/instagram',
        passport.authenticate('instagram'),
        function (req, res) { });
    router.get('/usuario/instagram/callback',
        passport.authenticate('instagram', { failureRedirect: '/' }),
        function (req, res) {
            res.redirect('/account');
        });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // test authentication
    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) { return next(); }
        res.redirect('/');
    }
    // Usuarios
    //router.post('/usuarios/:id', [mdUpload], usuario.uploadImage);
    // Workshops

    // Otros

    return router;
};