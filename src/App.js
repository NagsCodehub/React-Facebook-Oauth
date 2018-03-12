import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Nav,Navbar,NavItem } from 'react-bootstrap';
//import logo from './logo.svg';
import { Nav,Navbar } from 'react-bootstrap';
import RouteNavItem from "./components/RouteNavItem";
import './App.css';
import Routes from './Routes';
import FacebookLogin from './components/FacebookLogin';

class App extends Component {
  
  /*state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }*/
  render() {

   // const { username } = this.state;
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>             
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem  href="/signup">Signup</RouteNavItem >
              <RouteNavItem  href="/login">Login</RouteNavItem > 
              <FacebookLogin>                
              </FacebookLogin>             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
