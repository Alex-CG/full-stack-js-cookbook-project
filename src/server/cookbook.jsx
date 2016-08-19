import listen from '../util/server.listen.jsx';

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var CategoryDAO = require('./category.jsx').CategoryDAO;
var Grid = mongo.Grid;

app = express();


MongoClient.connect('mongodb://localhost:27017/cookbook', (err, db) => {

	console.log("Successfully connected!");

	var categoryDAO = new CategoryDAO(db);

	var router = express.Router();

	router.get("/categories", (req, res) => 
		categoryDAO.getCategories(categories =>  res.json({ data: categories }))
	);


    // Use the router routes
    app.use('/', router);

    // Start the server listening
    listen(app);

});