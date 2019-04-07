import React from 'react'

const Description = ({className, ...rest}) => {
    return (
        <p className={`desc ${className}`}{...rest}></p>
    )
}

export default Description
