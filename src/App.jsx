import './App.css'
import React from 'react'


import ParOuImpar from './components/condicional/ParOuImpar'
import ListaProdutos from './components/repeticao/tabelaProdutos'
import ListaAlunos from './components/repeticao/listaAluno'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'

export default () =>
    <div className="App">
        <h1>Fundamentos react </h1>
    
        <div className="Cards">

            <Card titulo="#08 Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
            </Card>

            <Card titulo="#07 Desafio de Repetição" color="#FF432E">
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo="#06 Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana"  />
                    <FamiliaMembro  nome="Gabriel"  />
                </Familia>
            </Card>

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