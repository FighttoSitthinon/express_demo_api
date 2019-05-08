const connect = require('../db/connect');

function query(sql) {
    return new Promise((resolve, reject) => {
        connect.con.query(sql , function (err, result) {
            if (err) reject(err); //error
            else resolve(result); //success
        });
    });
}


function genSQL(query) {
    let sql = "SELECT * FROM properties WHERE ";
    let key = false;

    if(query.uniq_id){
        sql = sql + " uniq_id = '" + query.uniq_id + "'";
        key = true;
    }

    if(query.property_type){
        sql = sql + (key == true? "AND": "") +" property_type = '" + query.property_type+ "'";
        key = true;
    }

    if(query.city){
        sql = sql + (key == true? "AND": "") + " city = '" + query.city+ "'";
        key = true;
    }

    if(query.amenities){
        sql = sql + (key == true? "AND": "") + " amenities = '" + query.amenities+ "'";
        key = true;
    }

    if(query.room_price){
        if(query.room_price.includes("-")){
            let price = query.room_price.split('-');
            sql = sql + (key == true? "AND": "") + " room_price BETWEEN '" +price[0]+ "' AND '" +price[1]+ "'";
        }else{
            sql = sql + (key == true? "AND": "") + " room_price = '" + query.room_price+ "'";
        }
        key = true;
    }

    if(key != true){
        sql = sql + " 1 ";
    }

    console.log(sql);
    return sql;
}


exports.query = query;
exports.genSQL = genSQL;
