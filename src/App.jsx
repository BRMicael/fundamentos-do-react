import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import './App.css'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'

export default props => (
    <div className="App">
    <h1>Fundamentos React</h1> 

    <div className="Cards">
        
    <Card titulo="#01 - Primeiro componente" color="#ff80ff">
        <Primeiro/>
    </Card>

    <Card titulo="#02 - Componente com parametro" color="#ff80ff">
        <ComParametro titulo="esse é o h3"/>
    </Card>

    <Card titulo="#03 - Componente com filhos" color="#ff80ff">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
            </ul>
        </ComFilhos>
    </Card>

    <Card titulo="#04 - Repeticao" color="#ff80ff">
        <Repeticao/>
    </Card>

    <Card titulo="#05 - Condicional" color="#ff80ff">
        <Condicional numero={10}/>
    </Card>

    <Card titulo="#06 - Condicional com If" color="#ff5660">
        <CondicionalComIf numero={11}/>
    </Card>
    <Card titulo="#07 - Comunicação direta" color="#ff5660">
        <Pai sobrenome="Andrade"/>
    </Card>

    <Card titulo="#08 - Comunicação indireta" color="#ff5660">
        <Super/>
    </Card>

    <Card titulo="#09 - Form" color="#ff5660">
        <Input/>
    </Card>

    <Card titulo="#10 - Contador" color="#ff5660">
        <Contador passo={10}/>
    </Card>

    </div> 
  

    </div>
)