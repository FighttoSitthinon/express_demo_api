const service =  require('./services/search');
const connect =  require('./db/connect');
const express =  require('express');
const app = express();


/*app.get('/', (req, res) => {
    service.getAll().then(result =>{
        res.send(result);
    });
});*/


app.get('/', async (req, res) => {
    var result = await service.getAll();
    res.send(result);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('lisenning in port '+port+'...');
});