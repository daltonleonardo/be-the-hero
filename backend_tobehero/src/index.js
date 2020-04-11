
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     return res.json({
//         evento: 'Semana Omnistack 11',
//         aluno: 'Abner Oliveira'
//     });
// });

// app.listen(3333);