import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
export default _ =>
    <div id="app">
        <h1>Fundamentos react (Arrow _)</h1>
        <Aleatorio min={1} max={10}/>
        <Fragmento />
        <ComParametro
            titulo="segundo componente"
            Nome="Muito legal"
            nota={7}>
        </ComParametro>
        <Primeiro></Primeiro>
    </div>