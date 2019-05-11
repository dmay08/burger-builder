import React from 'react';
import './App.css';
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

class App extends React.Component {
  state = {
    ingredients: [
      { name: 'Kaiser Bun', color: 'saddlebrown' },
      { name: 'Sesame Bun', color: 'sandybrown' },
      { name: 'Gluten Free Bun', color: 'peru' },
      { name: 'Beef Patty', color: '#3F250B' },
      { name: 'Soy Patty', color: '#3F250B' },
      { name: 'Black Bean Patty', color: '#3F250B' },
      { name: 'Chicken Patty', color: 'burlywood' },
      { name: 'Lettuce', color: 'lawngreen' },
      { name: 'Tomato', color: 'tomato' },
      { name: 'Bacon', color: 'maroon' },
      { name: 'Onion', color: 'lightyellow' }
    ],
    stack: []
  }

  handleAddIngredient = (ingredient) => {
    let burgerStack = [...this.state.stack]
    burgerStack.push(ingredient)
    this.setState(() => ({
      stack: burgerStack
    }))
  }

  handleClearIngredients = () => {
    this.setState(() => ({
      stack: []
    }))
  }

  handleRemoveRecentIngredient = () => {
    let prevBurgerStack = [...this.state.stack]
    prevBurgerStack.pop()
    this.setState(() => ({
      stack: prevBurgerStack
    }))
  }


  render() {
    // console.log('state', this.state)

    return (
      <div className="App">
        <header>
          <h1>Burger Builder</h1>
        </header>
        <div className="container">
          <IngredientList
            ingredients={this.state.ingredients}
            stack={this.state.stack}
            onAddIngredient={this.handleAddIngredient}
          />
          <BurgerPane
            stack={this.state.stack}
            onClearIngredients={this.handleClearIngredients}
            onRemoveRecentIngredient={this.handleRemoveRecentIngredient}
          />
        </div>
        <div className="footer-wrap">
          <footer>
            <p>Danny Mayasich 2019</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
