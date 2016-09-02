import React from 'react'
import RecipeItem from '../recipe-item/index.jsx'
import RecipePreview from '../recipe-preview/index.jsx'

class RecipesBoard extends React.Component {

  constructor(props) {
    super(props)
    this.handleShowPreview = this.handleShowPreview.bind(this)
    this.handleHidePreview = this.handleHidePreview.bind(this)
    this.state = { viewRecipe: false, idRecipePreview: 0}
  }

  handleHidePreview(){
  	this.setState({ viewRecipe: false });
  }

  handleShowPreview(id){
  	this.setState({ viewRecipe: true, idRecipePreview: id });
  }

  render() {
      return (
      	<div className="container">
	      	<div className="row">
	      		{
	      			this.props.recipes.map((recipe) => {
	      				return <RecipeItem key={recipe._id} id={recipe._id} title={recipe.name} category={recipe.category} chef={recipe.chef} showPreview={this.handleShowPreview}></RecipeItem>
                }
	      			)
	      		}
            {this.state.viewRecipe ? <RecipePreview show={this.state.viewRecipe} recipe={this.props.recipes[this.state.idRecipePreview-1]} hidePreview={this.handleHidePreview}/> : ''}
	      	</div>
	    </div>
      )
  }

}

export default RecipesBoard