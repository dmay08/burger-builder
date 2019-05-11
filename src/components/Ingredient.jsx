import React from 'react'
import './ingredient.css'


const Ingredient = ({ ingredient, onAddIngredient }) => {
    return (
        <div className="ingredient-wrap">
            <div className={`ingredient ${ingredient.name.toUpperCase().split(" ")[0]}`}>{ingredient.name}</div>
            <button onClick={() => onAddIngredient(ingredient)}>Add</button>
        </div>
    )
}

export default Ingredient