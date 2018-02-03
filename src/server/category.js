import * as constants from './util/constants.js'

class CategoryDAO {

	constructor() { }

	setDB(database) {
		this.db = database;	
	}

	getCategories(callback) {
        const query = {};

		const cursor = this.db.collection(constants.COLL_CATEGORIES).find(query);

        cursor.toArray((err, categories) => {
        	categories.unshift({ _id: 0, name: 'All'});
            callback(categories);
        });

	}

}

export const categoryDAO = new CategoryDAO();