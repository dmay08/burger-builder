import React from 'react'
import './burger-stack.css'

const BurgerStack = (props) => {
    return (
        <div>
            <div className={`burger-ingredient ${props.item.name.toLowerCase().split(" ")[0]}`}></div>
        </div>
    )
}

export default BurgerStack