const express = require('express');
const cors = requeri('cors');
const routes = require('./routes');

const app = express();

/*
* Rota / Recurso
*/
app.use(cors()); // desenvolvimento

// desenvolvimento producao
// app.use(cors({
//     origin: 'htto://meuap.com'
// })); 

app.use(express.json());
app.use(routes);



app.listen(3333);