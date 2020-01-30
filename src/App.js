import React, { Component } from 'react'
import './App.css';
import Fire from './config/Fire';
import Home from './Home';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = ({
        user:null, 
    });
    this.authListner = this.authListner.bind(this);
  }

  componentDidMount(){
    this.authListner();
  }
  authListner(){
    fire.auth().onAuthStateChanged((user) =>{
      console.log(user);
      if(user){
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null});
      }
    });
  }
  render() {
    return (
      <div>{this.state.user ? : ( <Home/>) : (<Login />)}</div>
    )
  }
}

export default App
