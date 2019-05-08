const service =  require('./services/query');
const express =  require('express');
const app = express();

/*
    Search by uniq Id (?uniq_id=00954d18277acc4bf9080370b1e0bcfe)
    Search by property_type (?property_type=Hotel)
    Search by City (?city=Kanpur)
    Search by amenities (?amenities=Parking)
    Search by Room Price Range min to max (?room_price=1000-2000)
    Search by Location & radius
*/

app.get('/all', async (req, res) => {
    let sql = "SELECT * FROM properties LIMIT 10;";
    var result = await service.query(sql);
    res.send(result);
});

app.get('/query/', async (req, res) => {
    let sql = await service.genSQL(req.query); 
    var result = await service.query(sql);
    res.send(result);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('lisenning in port '+port+'...');
});