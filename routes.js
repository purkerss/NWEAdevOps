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
                res.send("Welcome to the Blogpost app, to use the API you'll need to reach the /post or /posts endpoints.")
})
        app.get('/posts', function (req, res) {

		let posts = 'SELECT * FROM posts ORDER BY post_id;'
		blogdb.all(posts, (err, rows) => {
			if (err) {
                		return console.error(err.message);
 }
				res.send(rows); 
});

})
        app.post('/post', function (req, res) {
	const blogTitle	= req.body.title.toString();
	const blogBody	= req.body.body.toString();
                blogdb.run('INSERT INTO posts(title, body) VALUES(?, ?)', [blogTitle, blogBody], function(err) {
			if (err) {
      				return console.log(err.message)
				res.send(err.message);
    }
				res.send('Blog post received. ')
});

                console.log(req.body)
});
};
