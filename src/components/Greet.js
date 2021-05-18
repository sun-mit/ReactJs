import React from 'react'

const Greet = props => {
    console.log(props)
    return(
        <div>
            <h1>
                {props.name} is known as {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet