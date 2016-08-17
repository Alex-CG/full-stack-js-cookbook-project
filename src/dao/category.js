var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

class CategoryDAO {

	constructor(database) {
		"use strict";
		this.db = database;
	}

	getCategories(callback) {
        "use strict";

        var query = {}

		var cursor = this.db.collection('category').find(query);

        cursor.toArray((err, categories) => {
            assert.equal(err, null);
            callback(categories);
        });

	}

}