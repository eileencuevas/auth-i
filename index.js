const express = require('express');
const middlewareConfig = require('./api/config/middleware');
const helpers = require('./api/data/helpers/helperFunctions');
const bcrypt = require('bcryptjs');

const server = express();

middlewareConfig(server);

server.post('/api/register/', (req, res) => {
    const userInfo = req.body;
    userInfo.password = bcrypt.hashSync(userInfo.password);

    helpers
        .registerUser(userInfo)
        .then(id => {
            res.status(201).json({id: id[0] });
        })
        .catch(() => {
            res.status(500).json({ 
                error: `Couldn't register. Please try again with a username and password.` 
            });
        });
})

server.post('/api/login/', (req, res) => {
    const credentials = req.body;

    helpers
        .loginUser(credentials)
        .then(user => {
            if (!user ||
                !bcrypt.compareSync(credentials.password, user[0].password)) {
                    res.status(404).json({ error: 'You shall not pass!' });
                } else {
                   res.status(200).json({ message: 'Logged in!' });
                }
        })
        .catch(() => {
            res.status(500).json({ 
                error: `Couldn't log in. Please try again with a username and password.` 
            });
        });
})

server.get('/api/users/', (req, res) => {
    helpers
        .getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(() => {
            res.status(500).json({ 
                error: `Couldn't access users. Please try again with a username and password.` 
            });
        });
})

server.listen(5000, () => console.log('Server running on 5000'));