// server.js
const express           = require('express');
const sqlite3           = require('sqlite3').verbose();
const bodyParser        = require('body-parser');
const app               = express();
const port              = 8000;
const routes            = require('./routes.js');


	app.use(bodyParser.urlencoded({ extended: true }));
        app.listen(port, () => {
                console.log('We are live on ' + port);
});
	routes(app, {});

