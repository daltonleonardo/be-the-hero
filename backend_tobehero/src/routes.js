const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const ProfileController = require('./controllers/ProfileController');

routes.post('/session', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.get('/incidents/:id/:ongid', IncidentController.get);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);


routes.get('/', (req, res) => {
    return res.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Abner Oliveira'
    });
});

module.exports = routes;