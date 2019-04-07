import React from 'react'

const Button = ({className, ...rest}) => {
    return (
        <button className={`btn ${className}`}{...rest}></button>
    )
}


export default Button
