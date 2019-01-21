const knex = require('knex');
const knexConfig = require('../../../knexfile');

const db = knex(knexConfig.development);

const registerUser = userInfo => {
    return db('users').insert(userInfo);
}

const loginUser = userInfo => {
    return db('users').where({ 'username': userInfo.username });
}

module.exports = {
    registerUser,
    loginUser,
}