import React, { Component} from 'react';

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: 0
    }

    incrementar = () => {
        this.setState({
            //valor: this.state.valor + 1
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            //valor: this.state.valor + 1
            valor: this.state.valor - this.state.passo
        })
    }



    render() {

        return (
            <div>
                <h2>Contador</h2>
                <div>

                <label for="passoInput">Passo: </label>
                <input type="number" id="passoInput" style={{
                    fontSize: '1.4rem', width:"60px"
                }} 
                    value={this.state.passo}
                    onChange={event => this.setState({passo: +event.target.value})}
                />

                </div>
                
                <h4>Valor: {this.state.valor}</h4>
                
                <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.decrementar}>-</button>
                </div>
            </div>


        )

    }

}