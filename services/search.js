const connect = require('../db/connect');
/*
    Search by uniq Id (?uniq_id=00954d18277acc4bf9080370b1e0bcfe)
    Search by property_type (?property_type=Hotel)
    Search by City (?city=Kanpur)
    Search by amenities (?amenities=Parking)
    Search by Room Price Range min to max (?room_price=1000-2000)
    Search by Location & radius
*/
function getAll() {
    return new Promise((resolve, reject)=>{
        connect.con.query("SELECT * FROM properties LIMIT 3;", function (err, res) {
            if (err) reject(err);
            else    resolve(res);
        });
    });
}

exports.getAll = getAll;
