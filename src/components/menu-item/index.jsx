import React from 'react'

class MenuItem extends React.Component {

  render() {
      return (
      	<li><a href="#">{this.props.name}</a></li>
    )
  }

}

export default MenuItem