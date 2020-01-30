import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) =>{
            console.log(error);
        })
    }

    signUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="email" value={ this.state.email} onChange={ this.handleChange} />
                    <input type="password" value={ this.state.password} onChange={ this.handleChange} />
                    <button type="submit" onClick={ this.login }>Login</button>
                    <button type="submit" onClick={ this.signUp }>SignUp</button>
                </form>
            </div>
        );
    }
}

export default Login
