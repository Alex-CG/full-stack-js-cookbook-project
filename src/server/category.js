class CategoryDAO {

	constructor() { }

	setDB(database) {
		this.db = database;	
	}

	getCategories(callback) {
        const query = {};

		const cursor = this.db.collection('categories').find(query);

        cursor.toArray((err, categories) => {
            callback(categories);
        });

	}

}

export const categoryDAO = new CategoryDAO();