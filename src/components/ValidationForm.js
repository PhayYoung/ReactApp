import React from 'react';

const initialState = {
    name: '',
    email: '', 
    password: '',
    nameError: '',
    emailError: '',
    passwordError: '' 
}

export default class ValidationForm extends React.Component {
    state = initialState;

    handleChange = event => {
        const { type, name, value, checked } = event.target
        const isCheckbox = type === 'checkbox';
        this.setState({
            [name]: isCheckbox ? checked : value
        });
    };

    validate = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.name) {
            nameError = 'name cannot be blank';
        }

        if (!this.state.password) {
            passwordError = 'password cannot be blank';
        }

        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }

        if (emailError || nameError || passwordError) {
            this.setState({ emailError, nameError, passwordError });
            return false
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);

        }  
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    <div style={{fontSize: 11, color: 'red'}}>{this.state.nameError}</div>
                </div>
                <div>
                    <input
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <div style={{fontSize: 11, color: 'red'}}>{this.state.emailError}</div>
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                        <div style={{fontSize: 11, color: 'red'}}>{this.state.passwordError}</div>
                </div>
                <button>submit</button>
            </form>
        )
    }
}