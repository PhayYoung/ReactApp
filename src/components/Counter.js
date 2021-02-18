import React from 'react'

export default class Counter extends React.Component {
    

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.increment} className='tres'>increment</button>
                <button onClick={this.props.decrement} className='cuatro'>decrement</button>
            </div>
        );
    }
}