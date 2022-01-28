import React from 'react';
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}>Pedro</Filho>
        <Filho sobrenome={props.sobrenome}>João</Filho>
        <Filho sobrenome="Silva">Marcos</Filho>

    </div>