const connect = require('../db/connect');

function query(sql) {
    return new Promise((resolve, reject) => {
        connect.con.query(sql , function (err, result) {
            if (err) reject(err); //error
            else resolve(result); //success
        });
    });
}

exports.query = query;
