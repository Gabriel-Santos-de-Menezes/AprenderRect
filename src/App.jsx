import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
export default _ =>
    <div className="App">
        <h1>Fundamentos react </h1>

        <div className="Cards">

            <Card titulo="#04 Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={10}/>
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="segundo componente"
                    Nome="Muito legal"
                    nota={7}>
                </ComParametro>
            </Card>

            <Card titulo="#01 Primeiro componete" color="#588c73">
                <Primeiro></Primeiro>   
            </Card>
        </div>
    </div>