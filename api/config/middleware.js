const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');

module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(morgan('short'));
}