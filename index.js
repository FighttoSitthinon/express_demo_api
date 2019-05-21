const express =  require('express');
const func =  require('./function/query');
const app = express();

const queries = require('./routes/query');

app.use('/', queries);

app.get('/', (req, res) => {
    res.send('Hello');
});
//PORT
const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('lisenning in port '+port+'...');
});