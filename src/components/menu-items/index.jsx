import React from 'react'
import MenuItem from '../menu-item/index.jsx'

class MenuItems extends React.Component {

  render() {
      return (
        <ul className="nav navbar-nav">
        	{
            this.props.categories.map((category)=>{
              return <MenuItem key={category._id} name={category.name} />
            })
          }
        </ul>
	   )
  }

}

export default MenuItems