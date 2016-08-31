import React from 'react'

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.onClickRecipe = this.onClickRecipe.bind(this);
  }

  onClickRecipe(e) {
  	console.log(e.target.text);
  	e.preventDefault();
  	this.props.getRecipes(e.target.text);
  }

  render() {
      return (
      	<li><a href="#" onClick={this.onClickRecipe}>{this.props.name}</a></li>
    )
  }

}

export default MenuItem