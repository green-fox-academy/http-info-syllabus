const express = require('express');
const app = express();
const port = 3000;

const barmiFunction = (req, res) => {;
    res.send('barmi' + req.query.elmultNap);
};

const barmiFunction2 = (req, res) => {;
    res.send('post barmi');
};

app.get('/', (req, res) => res.send('Peti szervere'));
app.get('/barmi', barmiFunction);
app.post('/barmi', barmiFunction2);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))