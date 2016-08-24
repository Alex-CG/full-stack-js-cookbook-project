"use strict";

import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'
import {categoryDAO} from './category.js'
import {listen} from '../util/server.listen.js'

const MongoClient = mongodb.MongoClient;
const app = express();

MongoClient.connect('mongodb://localhost:27017/cookbook', (err, db) => {

	console.log("Successfully connected!");
	console.log(db);

	categoryDAO.setDB(db);

	const router = express.Router();

	router.get("/categories", (req, res, next) => 
		categoryDAO.getCategories(categories =>  res.json({ categories: categories }))
	);

	app.use(cors());

    // Use the router routes 
    app.use('/', router);

    // Start the server listening
	listen(app);

});