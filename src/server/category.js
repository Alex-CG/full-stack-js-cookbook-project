class CategoryDAO {

	constructor() { }

	setDB(database) {
		this.db = database;	
	}

	getCategories(callback) {
        let query = {};

		let cursor = this.db.collection('categories').find(query);

        cursor.toArray((err, categories) => {
            callback(categories);
        });

	}

}

export let categoryDAO = new CategoryDAO();