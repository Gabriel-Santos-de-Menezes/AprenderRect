import React from 'react'
import IndiretaFilho from './IndiretaFilho'


export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false
    
    function fornecerInformacoes(nomParam, idadeParam, nerdParam) {
        nome = nomParam
        idade = idadeParam
        nerd = nerdParam
    }
    
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}