import React from 'react'

export default class MyForm extends React.Component {
    state = {
        name: '',
        favoritePet: '',
        rememberMe: false,
        title: 'Mr.'
    }

    handleChange = (event) => {
        const { name, value, checked, type } = event.target
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const remember = this.state.rememberMe ? 'do' : "don't"
        alert(`hello, ${this.state.name}, your favorite pet is ${this.state.favoritePet}, you're a ${this.state.title} and you ${remember} remember me`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange}
                    value={this.state.name}
                    name='name'/>
                <textarea 
                    onChange={this.handleChange}
                    value={this.state.favoritePet}
                    name='favoritePet'/>
                <input 
                    type='checkbox' 
                    onChange={this.handleChange}
                    checked= {this.state.rememberMe}
                    name='rememberMe'/>
                <div>
                    <select
                        onChange={this.handleChange}
                        value={this.state.title}
                        name='title'>
                        <option>Mr.</option>
                        <option>Miss.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                    </select>
                </div>
                <button>submit</button>
            </form>
        
        )
    }
}