import React from 'react'
import './Card.css'
export default props =>
    <div className="Card">
        <div className="Content" style={{borderColor: props.color || '#fff'}}>
        {props.children}
        </div>

        <div className="Footer" style={{backgroundColor: props.color || '#fff'}}>
        
        {props.titulo} 
        </div>
    </div>