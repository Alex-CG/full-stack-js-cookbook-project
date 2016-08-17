import React from 'react'

class CookbookApp extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      return (
	      <div>
	      	<h1>this.props.title</h1>
	      	<h3>this.props.category</h3>
	      	<h2>this.props.cheff</h2>
	      	<div>
	      		<button>Ver<button>
	      	</div>
	      </div>
      )
  }

}

export default CookbookApp