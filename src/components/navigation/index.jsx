import React from 'react'
import Menu from '../menu/index.jsx'

class Navigation extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      return 

      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      	<div class="container">
      		<div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <Menu></Menu>

      	</div>
      </nav>


  }

}

export default Navigation