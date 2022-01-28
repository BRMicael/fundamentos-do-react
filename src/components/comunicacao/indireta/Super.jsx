import React, { useState } from 'react'
import Sub from "./Sub"

export default (props) => {

    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado)
        console.log(valorGerado)
        console.log(texto)
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}