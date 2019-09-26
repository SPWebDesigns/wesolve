const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');

const environmentConfiguration = require('dotenv').config();
const dbManager = require('./src/infrastructure/dbManager.js');

const publicPath = path.join(__dirname, 'dist');

const app = express();

const baseUrl = process.env.ENVIRONMENT == 'DEVELOPMENT' ?
    `${process.env.LOCAL_URL}:${process.env.PORT}` : process.env.PROD_URL;

const dbClient = new dbManager.DbManager();

// configure passport.js to use the local strategy
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    (email, password, done) => {
        axios.get(`${baseUrl}/users?email=${email}&secret=${process.env.SECRET}`)
            .then(res => {
                const user = res.data;
                if (!user) {
                    return done(null, false, {
                        message: 'Invalid credentials.\n'
                    });
                }
                if (password != user.password) {
                    return done(null, false, {
                        message: 'Invalid credentials.\n'
                    });
                }
                return done(null, user);
            })
            .catch(error => done(error));
    }
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    axios.get(`${baseUrl}/users?id=${id}&secret=${process.env.SECRET}`)
        .then(res => done(null, res.data))
        .catch(error => done(error, false))
});

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/styles', express.static(__dirname + '/styles/'));
app.use('/img', express.static(__dirname + '/img/'));
app.use('/js', express.static(__dirname + '/js/'));

// add & configure middleware
app.use(session({
    genid: (req) => {
        return uuid()
    },
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('port', (process.env.PORT || 5000));

app.get('/users', function (req, res) {

    var email = req.query.email;
    var id = req.query.id;
    var secret = req.query.secret;

    if (!secret || secret != process.env.SECRET) {
        return;
    }

    function processCallback(err, result) {
        if (result) {
            res.send(result);
        }

        if (err) {
            return err;
        }
    }
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

(function () {
    const portNumber = app.get('port');

    console.log(`Starting the server in the port ${portNumber}`);
    app.listen(portNumber);
})();