const express =  require('express');
const app = express();

const queries = require('./routes/query');

app.use('/queries/', queries);

app.get('/', (req, res) => {
    res.send('Hello this is RESTful APIs by ExpressJS <br>1) BaseURL/queries/{:row}<br>2) BaseURL/queries/{Criteria}');
});
//PORT
const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('lisenning in port '+port+'...');
});