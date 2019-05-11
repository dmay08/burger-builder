import React from 'react'
import Ingredient from './Ingredient'
import './ingredient-list.css'

const IngredientList = (props) => {
    return (
        <div className="ingredient-list">
            <div className="title-wrap">
                <h2 className="title">Ingredients</h2>
            </div>
            <div className="list-wrap">
                {props.ingredients.map(ingredient => {
                    return <Ingredient
                        ingredient={ingredient}
                        onAddIngredient={props.onAddIngredient}
                        key={ingredient.name}
                    />
                })}
            </div>
        </div>
    )
}


export default IngredientList