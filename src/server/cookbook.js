"use strict";

import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'
import {categoryDAO} from './category.js'
import {recipeDAO} from './recipe.js'
import {listen} from './listener/listener.js'
import * as constants from './util/constants.js'

const MongoClient = mongodb.MongoClient;
const app = express();

MongoClient.connect(constants.DB_URL + "/" + constants.DB_NAME, (err, db) => {

	console.log("Successfully connected!");
	console.log(db);

	categoryDAO.setDB(db);
	recipeDAO.setDB(db);

	const router = express.Router();

	router.get(constants.GET_ALL_CATEGORIES, (req, res, next) => 
		categoryDAO.getCategories(categories =>  res.json({ categories: categories }))
	);

	router.get(constants.GET_RECIPEBOARD_BY_CATEGORY, (req, res, next) => {
			const category = req.params.category;
			recipeDAO.getRecipes(category, (recipes) =>  res.json({ recipes: recipes }));
		}
	);

	app.use(cors());

    // Use the router routes 
    app.use('/', router);

    // Start the server listening
	listen(app);

});