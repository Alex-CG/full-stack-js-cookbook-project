import React from 'react'
import RecipeItem from '../recipe-item/index.jsx'
import RecipePreview from '../recipe-preview/index.jsx'

class RecipesBoard extends React.Component {

  constructor(props) {
    super(props)
    this.handleShowModalPreview = this.handleShowModalPreview.bind(this)
    this.state = { modalRecipe: false }
  }

  handleHideModalPreview(){
  	this.setState({ modalRecipe: false })
  }

  handleShowModalPreview(){
  	this.setState({ modalRecipe: true })
  }


  render() {
      return (
      	<div className="container">
	      	<div className="row">
	      		{
	      			this.props.recipes.map((recipe)=>{
	      				return <RecipeItem key={recipe._id} title={recipe.name} category={recipe.category} chef={recipe.chef} showPreview={this.handleShowModalPreview}></RecipeItem>
	      			})
	      		}
            {this.state.modalRecipe ? <RecipePreview hidePreview={this.handleHideModalPreview}/> : null}
	      	</div>
	    </div>
      )
  }

}

export default RecipesBoard