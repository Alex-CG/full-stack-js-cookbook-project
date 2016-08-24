import React from 'react'
import Navigation from '../navigation/index.jsx'

class CookbookApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories: [] }
  }

  componentWillMount() {
    fetch('http://localhost:4578/categories')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ categories: data.categories })
      })
  }

  render() {
      if(this.state.categories.length>0){
        return <Navigation></Navigation>
      }else{
        return <p className="text-center">Cargando categorias...</p>
      }
  }

}

export default CookbookApp