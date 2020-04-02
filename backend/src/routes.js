const express = require('express');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/incidents/v1', IncidentController.index2);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.post('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

// routes.get('/users', (request, response) => {
//     // return response.send('Hello World');
//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Diego Fernandes'
//     });
// });


module.exports = routes;
