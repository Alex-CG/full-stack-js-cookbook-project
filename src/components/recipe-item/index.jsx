import React from 'react'

class RecipeItem extends React.Component {

  render() {
      return (
	      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
	      	<div className="media">

	      		<div className="media-body">
			      	<h4 className="media-heading">{this.props.title}</h4>
			      	<h6>{this.props.category}</h6>
			      	<h5>{this.props.chef}</h5>
			      	<div>
			      		<button>Ver</button>
			      	</div>
	      		</div>

	      	</div>
	      </div>
      )
  }

}

export default RecipeItem