import React from 'react'
import BurgerStack from './BurgerStack'
import './burger-pane.css'


const BurgerPane = (props) => {
    // console.log('props', props.stack)
    return (
        <div className="pane-wrap">
            <div className="middle-wrap">
                <div className="buttons-wrap">
                    {props.stack.length > 0 ?
                        <button
                            className="clear-button"
                            onClick={props.onClearIngredients}
                        >Clear All</button>
                        :
                        null
                    }
                    {props.stack.length > 0 ?
                        <button
                            className="recent-button"
                            onClick={props.onRemoveRecentIngredient}
                        >
                            Clear Top</button>
                        :
                        null
                    }
                </div>
                {props.stack.map(item => {
                    return <BurgerStack
                        item={item}
                    />
                })}
            </div>
        </div>
    )
}

export default BurgerPane