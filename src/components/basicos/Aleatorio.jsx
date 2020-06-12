import React from 'react'

export default function Aleatorio(props) {
    //const min = props.min
    //const max = props.max
    //forma reduzida
    const { min, max } = props

    let result = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <p><strong>Valor Mínimo: {min}</strong></p>
            <p><strong>Valor Máximo: {max}</strong></p>
            <p>Número aleatorio: {result}</p>
        </div>
    )
}