"use strict";

import express from 'express';
import mongodb from 'mongodb';
import {categoryDAO} from './category.js';

let MongoClient = mongodb.MongoClient;
let app = express();

MongoClient.connect('mongodb://localhost:27017/cookbook', (err, db) => {

	console.log("Successfully connected!");

	categoryDAO.setDB(db);

	var router = express.Router();

	router.get("/categories", (req, res) => 
		categoryDAO.getCategories(categories =>  res.json({ data: categories }))
	);


    // Use the router routes
    app.use('/', router);

    // Start the server listening
    let PORT = 4578;

	app.listen(PORT, () => {
		console.log('Cookbook listening on http://localhost:%s.', PORT);
	});

});