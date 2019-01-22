const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const db = knex(knexConfig.development);

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
    store: new KnexSessionStore({
        tablename: 'sessions',
        sidfieldname: 'sid',
        knex: db,
        createtable: true,
        clearInterval: 1000 * 60 * 10,
    }),
});

module.exports = server => {
    server.use(currentSession);
    server.use(express.json());
    server.use(helmet());
    server.use(morgan('short'));
    server.use(cors());
}