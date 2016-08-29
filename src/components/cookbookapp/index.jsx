import React from 'react'
import Navigation from '../navigation/index.jsx'
import MenuItems from '../menu-items/index.jsx'
import RecipesBoard from '../recipes-board/index.jsx'

class CookbookApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories: [], recipes: [] }
  }

  componentWillMount() {
    fetch('http://localhost:4578/categories')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ categories: data.categories })
      })

    fetch('http://localhost:4578/recipesboard')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ recipes: data.recipes })
      })

  }

  render() {  
    return (

      <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">

              <Navigation></Navigation>

              <div id="navbar" className="navbar-collapse collapse">
                  <MenuItems categories={this.state.categories}></MenuItems>
              </div>
     
            </div>
          </nav>

          <RecipesBoard recipes={this.state.recipes} ></RecipesBoard>

      </div>

    )
  }

}

export default CookbookApp