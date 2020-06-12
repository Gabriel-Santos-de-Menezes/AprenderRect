import React from 'react'
import './Card.css'

export default (props) =>{
    //Objeto javaScript que recebe a cor 
    //passada como parâmetro na chamada do componente
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor:  props.color || '#F00',
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}   </div>
            <div className="Content">
                
                {props.children}
            </div>

        </div>
    )
}