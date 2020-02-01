import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
    state = {
            email: '',
            password: '',
            err:''
        };
        
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    login = (e) =>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) =>{
            this.setState({err:'Invalid username and password'})
        })
    }

    signUp = (e) =>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({ err:'Please SignUp with valid email and password'})
        })
    }

    render() {
        return (
            <div className="loginDetails">
                <p className="error"> { this.state.err }</p>
                <form>
                    <input type="email" placeholder="Username" onChange={ this.handleChange} name="email" />
                    <input type="password" placeholder="Password" onChange={ this.handleChange} name="password" />
                    <button type="submit" className="login" onClick={ this.login }>Login</button>
                    <button type="submit" className="signUp" onClick={ this.signUp }>SignUp</button>
                </form>
            </div>
        );
    }
}

export default Login
