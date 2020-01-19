const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, '../db/womxn.db')
const fs = require('fs')

function filter(req,res,next) {
	try {
		// open database in memory
		let db = new sqlite3.Database(dbPath,sqlite3.OPEN_READWRITE, (err) => {
			if (err) {
			return console.error(err.message);
			}
			console.log('Connected to the in-memory SQlite database.');
		});

		var keyword = req.query.keyword;

		db.serialize(() => {
			sql = `SELECT * FROM user_info WHERE user_keyword_hist LIKE '%${keyword}%';`;
			
			db.all(sql, (err, row) => {
			if (err) {
				console.error(err.message);
			}
			// console.log(row);

			// // parse json
			// var jsonObj = JSON.parse(row);
			// console.log(jsonObj);
			
			// stringify JSON Object
			// var jsonContent = JSON.stringify(row);
			// console.log(jsonContent);
			
			// fs.writeFile("./db/output.json", jsonContent, 'utf8', function (err) {
			// 	if (err) {
			// 		console.log("An error occured while writing JSON Object to File.");
			// 		return console.log(err);
			// 	}
			
			// 	console.log("JSON file has been saved.");
			// });

			// var json = require('/Users/sangela/Desktop/Womxn20/back-end/db/output.json');
			res.status(200).render('index', { title: 'Hey', data: row });
			// res.status(200).json(row);
			});
		});

		// close the database connection
		db.close((err) => {
			if (err) {
				return console.error(err.message);
			}
			console.log('Close the database connection.');
		});
		// var json = require('/Users/sangela/Desktop/Womxn20/back-end/db/output.json');
		// res.status(200).render('index', { title: 'Hey', data: row });
		// res.status(200).json(row);

		} catch (err) {
			res.status(500).send('SERVER ERROR:' + err);
				// close the database connection
			db.close((err) => {
				if (err) {
					return console.error(err.message);
				}
				console.log('Close the database connection.');
			});
		}

		
}

// filter();

module.exports = {filter}