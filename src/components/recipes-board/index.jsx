import React from 'react'
import RecipeItem from '../recipe-item/index.jsx'

class RecipesBoard extends React.Component {

  render() {
      return (
      	<div className="container">
	      	<div className="row">
	      		{
	      			this.props.recipes.map((recipe)=>{
	      				return <RecipeItem key={recipe._id} title={recipe.name} category={recipe.category} chef={recipe.chef} ></RecipeItem>
	      			})
	      		}
	      	</div>
	    </div>
      )
  }

}

export default RecipesBoard