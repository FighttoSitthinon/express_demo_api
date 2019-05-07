const service = require('./services/search');
const connect = require('./db/connect');
const express = require('express');
const app = express();


app.get('/all', async (req, res) => {
    var result = service.getAll;
    res.send(result);
});

app.get('/', async (req, res) => {
    connect.con.query("SELECT * FROM properties LIMIT 3;", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});


//PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('lisenning in port '+port+'...');
});