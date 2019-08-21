import React from 'react'
import './Button.scss'

const Button = ({name,action}) => {
    return (
        <button onClick={action} className="button">{name}</button>
    )
}

export default Button
