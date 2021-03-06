import React from 'react'

class RecipeItem extends React.Component {

  constructor(props) {
    super(props);
    this.onClickShowPreview = this.onClickShowPreview.bind(this);
  }

  onClickShowPreview(e){
  	e.preventDefault();
  	const id = this.props.id;
    console.log('recipe' + id);
  	this.props.showPreview(id);
  }

  render() {
      return (
	      <div className="col-xs-12 col-sm-6 col-md-4">
	      	<div className="media">

	      		<div className="media-body sep-recipe">
			      	<h4 className="media-heading">{this.props.title}</h4>
			      	<h6>{this.props.category}</h6>
			      	<h5>{this.props.chef}</h5>
			      	<div>
			      		<button className="btn btn-info btn-xs" onClick={this.onClickShowPreview}>Ver</button>
			      	</div>
	      		</div>

	      	</div>
	      </div>
      )
  }

}

export default RecipeItem