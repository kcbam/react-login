import React, { Component } from 'react';
import fire from './config/Fire';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:null
        }
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    componentDidMount(){        
            fire.auth().onAuthStateChanged((user) =>{
                this.setState({ user:user.email});            
            });
    }

    render() {
        return (     
           <div className="homePage">
               <h2>Welcome to Home { this.users }</h2>
               <button className="logOut" onClick={ this.logout}>LogOut</button>
           </div>
        );

    }

}

export default Home;
