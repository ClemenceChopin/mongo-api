const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/index');
const server = express();
const mongoose = require('mongoose');


server.use(bodyParser.json());
routes(server);

server.listen(3050, () =>{
    console.log('Ecoute sur le port 3050');
    mongoose.connect('mongodb://localhost/user_api_database');
    mongoose.connection
    .once('open', () => console.log('connexion etablie'))
        .on('error', (error) =>
        {
            console.error('Echec de la connexion \\n', error)
        })
    })