const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forviz_test"
});

exports.con = con;

/*con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM properties LIMIT 3;", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/
