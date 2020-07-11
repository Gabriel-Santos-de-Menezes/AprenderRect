import "./input.css";
import React, { useState } from 'react'

export default props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)

    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <p>Componente controlado</p>
                <input value={valor} onChange={quandoMudar} />

                <p>Componente só leitura</p>
                <input value={valor} readOnly />
                
                <p>Componente não controlado</p>
                <input value={undefined} />
            </div>
        </div>

    )
}