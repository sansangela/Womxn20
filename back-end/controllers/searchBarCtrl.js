// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host     : '',
//   	user     : '',
// 	password : '',
// 	database: ''
// });
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('../db/womxn.db',sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
	  return console.error(err.message);
	}
	console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
	db.each(`SELECT * FROM user_info WHERE user_keyword = "Basketball";`, (err, row) => {
	  if (err) {
		console.error(err.message);
	  }
	  console.log(row);
	});
});
   
// close the database connection
db.close((err) => {
if (err) {
	return console.error(err.message);
}
console.log('Close the database connection.');
});

// connection.connect()
// connection.end()

// function filter(req,res,next) {
// 	try {

// 		  var queryParam = req.query;
// 		  // query
//   		sql = `SELECT * FROM ride WHERE departure = '${queryParam.departure}' AND destination = '${queryParam.destination}' AND date = '${queryParam.date}';`;

// 		connection.query(sql,function(err,result,fields) {
// 			if (err) {throw err;}
// 			res.status(200).send(result);
// 		});
// 	} catch (err) {
// 		res.status(500).send('SERVER ERROR:' + err);
// 		connection.end();
// 	}
// }

// module.exports = {filter}