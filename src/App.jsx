import './App.css'
import React from 'react'

import Contador from "./components/contador/Contador"
import Input from "./components/formulario/input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
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

            <Card titulo="#12  Componente Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11  Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10  Comunicação Indireta" color="#8bad39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09  Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Gabriel'}}/>
                <UsuarioInfo usuario={{email: 'gm@gsfgd.com'}}/>
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