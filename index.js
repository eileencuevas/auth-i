const express = require('express');
const middlewareConfig = require('./api/config/middleware');
const helpers = require('./api/data/helpers/helperFunctions');
const bcrypt = require('bcryptjs');

const server = express();

middlewareConfig(server);

server.post('/api/register', (req, res) => {
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

server.listen(5000, () => console.log('Server running on 5000'));