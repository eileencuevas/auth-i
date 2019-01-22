const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');

const currentSession = session({
    name: 'cookiemonster',
    secret: 'me like cookies',
    cookie: {
        maxAge: 1000 * 60 * 5,
        secure: false,
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
});

module.exports = server => {
    server.use(currentSession);
    server.use(express.json());
    server.use(helmet());
    server.use(morgan('short'));
    server.use(cors());
}