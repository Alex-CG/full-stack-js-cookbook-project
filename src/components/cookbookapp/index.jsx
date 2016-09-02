import React from 'react'
import Navigation from '../navigation/index.jsx'
import MenuItems from '../menu-items/index.jsx'
import RecipesBoard from '../recipes-board/index.jsx'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

class CookbookApp extends React.Component {

  constructor(props) {
    super(props)
    this.getRecipes = this.getRecipes.bind(this)
    this.state = { categories: [], recipes: [] }
  }

  componentWillMount() {
    this.getCategories();
    this.getRecipes('');
  }

  getCategories() {
    fetch('http://localhost:4578/categories')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({ categories: data.categories })
    });
  }

  getRecipes(category) {
    const cat = category ? category : 'All';
    fetch('http://localhost:4578/recipesboard/' + cat)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({ recipes: data.recipes })
    });
  }

  render() {  
    return (

      <div>
          <nav className="navbar navbar-inverse">
            <div className="container">

              <Navigation></Navigation>

              <div id="navbar" className="navbar-collapse collapse">
                  <MenuItems categories={this.state.categories} getRecipes={this.getRecipes} />
              </div>
     
            </div>
          </nav>
          <br />
          <RecipesBoard recipes={this.state.recipes} />

      </div>

    )
  }

}

export default CookbookApp