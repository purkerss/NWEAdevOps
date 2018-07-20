// db.js

const sqlite3 = require('sqlite3').verbose();

//Create DB Object


let blogdb = new sqlite3.Database('./blog.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Test connection opened to the Blog database, displaying posts table.');
});


//Query DB

let posts = 'SELECT post_id ID, title Title, body Body FROM posts ORDER BY ID';

blogdb.get(posts, (err, row) => {
	if (err) {
		return console.error(err.message);
 }
	return row
 	? console.log(row.ID, row.Title, row.Body)
    	: console.log('No Blog posts found.');
 
});



//Best practice - Close DB connection once you're done.

blogdb.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closing the test connection and awaiting input from the web.');
});

