import * as constants from './util/constants.js'

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

        const proj = { name:1, nationality:1, category:1, chef:1, level:1, preparation:1 };

		const cursor = this.db.collection(constants.COLL_RECIPES).find(query, proj).sort({_id:1});

        cursor.toArray((err, recipes) => {
            callback(recipes);
        });

	}

}

export const recipeDAO = new RecipeDAO();