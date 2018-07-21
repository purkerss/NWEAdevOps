// routes.js

module.exports 	= function(app, db) {
const sqlite3 	= require('sqlite3').verbose();

//Create DB Object


let blogdb = new sqlite3.Database('./blog.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('DB connection open.');
});

        app.get('/', function (req, res) {
                res.send('Hello World!')
})
        app.get('/posts', function (req, res) {

		let posts = 'SELECT post_id ID, title Title, body Body FROM posts ORDER BY ID';
		blogdb.get(posts, (err, row) => {
			if (err) {
                		return console.error(err.message);
 }
        			// return row
        			// ? console.log(row.ID, row.Title, row.Body)
        			// : console.log('No Blog posts found.')
				res.send(row); 
});

})
        app.post('/post', function (req, res) {

                blogdb.run("INSERT INTO posts(title, body) VALUES('Testing Title', 'Testing Body')", function(err) {
			if (err) {
      				return console.log(err.message)
				res.send(err.message);
    }
				res.send('Blog post received.')
});

                console.log(req.body)
});
};
