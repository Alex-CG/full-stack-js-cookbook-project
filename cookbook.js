var express = require('express'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert'),
CategoryDAO = require('./dao/category').CategoryDAO;

app = express();


MongoClient.connect('mongodb://localhost:27017/cookbook', function(err, db) {
	"use strict";

	assert.equal(null, err);
	console.log("Successfully connected!");

	var categoryDAO = new CategoryDAO(db);

	var router = express.Router();

	router.get("/categories", (req, res) => {
		categoryDAO.getCategories(categories =>  res.json({ data: categories })
	});

    app.use('/', router);

    // Start the server listening
    var server = app.listen(3000, () => {
    	var port = server.address().port;
    	console.log('Cookbook  listening on port %s.', port);
    });

}
