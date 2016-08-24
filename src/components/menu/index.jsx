import React from 'react'
import MenuItems from '../menu-items/index.jsx'

class Menu extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      return 
        <div id="navbar" class="navbar-collapse collapse">
            <MenuItems></MenuItems>
        </div>
  }

}

export default Menu