import React, { Fragment, useState } from 'react'

const Event = () => {
    const [text,setText] = useState('Este es un rexto desde estado')

    const changeText = () => {
        setText('Texto Modificaco')
    }

    return (
        <Fragment>
            <h2>{ text }</h2>
            <button onClick={ () => changeText() }>Click Here!</button>
        </Fragment>
    )
}

export default Event
