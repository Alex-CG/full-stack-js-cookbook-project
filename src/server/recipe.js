class RecipeDAO {

	constructor() { }

	setDB(database) {
		this.db = database;	
	}

	getRecipes(callback) {
        const query = {};

		const cursor = this.db.collection('recipes').find(query);

        cursor.toArray((err, recipes) => {
            callback(recipes);
        });

	}

}

export const recipeDAO = new RecipeDAO();