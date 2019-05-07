const service =  require('./services/query');
const express =  require('express');
const app = express();

app.get('/', async (req, res) => {
    let sql = "SELECT * FROM properties LIMIT 10;";
    var result = await service.query(sql);
    res.send(result);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('lisenning in port '+port+'...');
});