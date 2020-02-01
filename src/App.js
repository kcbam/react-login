import React, { Component } from 'react'
import './App.css';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';

class App extends Component {
    state = {
        user:null, 
    };
    componentDidMount(){
      this.authListner();
    }
  authListner = () => {
    fire.auth().onAuthStateChanged((user) =>{
      //console.log(user.email);
      if(user){
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      }else {
        this.setState({ user: null});
      }
    });
  }
  render() {
    return (
      <div className="main">{this.state.user ? ( <Home/>) : (<Login />)}</div>
    )
  }
}

export default App
