import React, { useState } from 'react';

export default (props) => {
    const [nome, setNome] = useState()
    return (
        <>
            <h3>Digite seu nome: {nome}</h3>
            <input type="text" value={nome}
            onChange={evento => setNome(evento.target.value)} />
        
        </>
    )

}