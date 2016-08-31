class RecipeDAO {

	constructor() { }

	setDB(database) {
		this.db = database;	
	}

	getRecipes(cat, callback) {
        let query = {};

        console.log(cat);

        if(cat && cat!='All') {
        	query = { category: cat };
        }

        const proj = { name:1, category:1, chef:1 };

		const cursor = this.db.collection('recipes').find(query, proj);

        cursor.toArray((err, recipes) => {
            callback(recipes);
        });

	}

}

export const recipeDAO = new RecipeDAO();