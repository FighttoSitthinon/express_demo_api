const func =  require('../function/query');
const express = require('express');
const router = express.Router();

/*
    Search by uniq Id (?uniq_id=00954d18277acc4bf9080370b1e0bcfe)
    Search by property_type (?property_type=Hotel)
    Search by City (?city=Kanpur)
    Search by amenities (?amenities=Parking)
    Search by Room Price Range min to max (?room_price=1000-2000)
    Search by Location & radius
*/

router.get('/:row', async (req, res) => {
    try{
        let sql = "SELECT * FROM properties LIMIT "+req.params.row;
        console.log(sql);
        var result = await func.query(sql);
        res.send(result);
    }catch(err){
        res.send({error: err});
    }
});

router.get('/query/', async (req, res) => {
    try{
        let sql = await func.genSQL(req.query); 
        var result = await func.query(sql);
        res.send(result);
    }catch(err){
        res.send({error: err});
    }
});

module.exports = router;