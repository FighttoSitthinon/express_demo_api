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

app.get('/', async (req, res) => {
    let sql = "SELECT * FROM properties LIMIT 10;";
    var result = await service.query(sql);
    res.send(result);
});

app.get('/query/', async (req, res) => {

    let sql = "SELECT * FROM properties WHERE ";
    let key = false;

    if(req.query.uniq_id){
        sql = sql + " uniq_id = '" + req.query.uniq_id + "'";
        key = true;
        console.log(sql);
    }

    if(req.query.property_type){
        sql = sql + (key == true? "AND": "") +" property_type = '" + req.query.property_type+ "'";
        key = true;
        console.log(sql);
    }

    if(req.query.city){
        sql = sql + (key == true? "AND": "") + " city = '" + req.query.city+ "'";
        key = true;
        console.log(sql);
    }

    if(req.query.amenities){
        sql = sql + (key == true? "AND": "") + " amenities = '" + req.query.amenities+ "'";
        key = true;
        console.log(sql);
    }

    if(req.query.room_price){
        if(req.query.room_price.includes("-")){
            let price = req.query.room_price.split('-');
            sql = sql + (key == true? "AND": "") + " room_price BETWEEN '" +price[0]+ "' AND '" +price[1]+ "'";
        }else{
            sql = sql + (key == true? "AND": "") + " room_price = '" + req.query.room_price+ "'";
        }
        key = true;
        console.log(sql);
    }

    if(key != true){
        sql = sql + " 1 ";
    }

    var result = await service.query(sql);
    res.send(result);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('lisenning in port '+port+'...');
});