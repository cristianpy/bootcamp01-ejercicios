var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var compression = require('compression');

var routes = require('./server/routes');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
// compress all responses
app.use(compression());
// enable all CORS requests
app.use(cors());
// app.options('*', cors());
// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
app.use(methodOverride());
// HTTP request logger middleware for node.js
app.use(morgan('dev'));
//app.use(express.static(process.cwd + '/public'));
app.use('/', express.static(__dirname));
// *** passport init *** //
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
/*var Account = require('./server/models/usuario');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());*/

// App routes
app.use(routes(express.Router()));

/*app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: './public'
    });
});*/

var models = require('./server/models');
models.sequelize
    .authenticate()
    .then(function() {
        console.log('Connection successful');
    })
    .catch(function(error) {
        console.log('Error creating connection');
    });

// Listen server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listen server');
});