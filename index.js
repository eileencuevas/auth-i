const express = require('express');
const middlewareConfig = require('./api/config/middleware');

const server = express();

middlewareConfig(server);

server.listen(5000, () => console.log('Server running on 5000'));