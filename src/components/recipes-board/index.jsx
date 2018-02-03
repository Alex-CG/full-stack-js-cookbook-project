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

  getRecipe(recId){
    for (var i = 0, len = this.props.recipes.length; i < len; i++) {
      if(recId == this.props.recipes[i]._id){
        return this.props.recipes[i];
      }
    }

    return {};
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
            {this.state.viewRecipe 
              ? <RecipePreview show={this.state.viewRecipe} recipe={this.getRecipe(this.state.idRecipePreview)} hidePreview={this.handleHidePreview}/> 
              : ''
            }
	      	</div>
	    </div>
      )
  }

}

export default RecipesBoard