const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, '../db/womxn.db')

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
			console.log(row);
			res.set('Content-Type', 'text/html');
			res.status(200).send(row);
			});
		});

		// close the database connection
		db.close((err) => {
			if (err) {
				return console.error(err.message);
			}
			console.log('Close the database connection.');
		});
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