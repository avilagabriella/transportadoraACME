const express = require('express');


const routes = express.Router();


const Cliente = require('./controllers/cliente');

routes.get('/', (req,res) => {
    res.json("API Transportadora ACME 1.0")
});

routes.post('/clientes', Cliente.addClintes);
routes.get('/clientes', Cliente.getClintes);



module.exports = routes;