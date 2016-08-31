import React from 'react'
import MenuItem from '../menu-item/index.jsx'

class MenuItems extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      return (
        <ul className="nav navbar-nav">
        	{
            this.props.categories.map((category)=>{
              return <MenuItem key={category._id} name={category.name} getRecipes={this.props.getRecipes} />
            })
          }
        </ul>
	   )
  }

}

export default MenuItems