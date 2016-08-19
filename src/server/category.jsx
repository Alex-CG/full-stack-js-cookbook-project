var MongoClient = require('mongodb').MongoClient;

class CategoryDAO {

	constructor(database) {
		this.db = database;
	}

	getCategories(callback) {
        var query = {};

		var cursor = this.db.collection('category').find(query);

        cursor.toArray((err, categories) => {
            callback(categories);
        });

	}

}