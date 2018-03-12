import React, { Component } from "react";
import FacebookProvider, { Login } from 'react-facebook';
//import { Redirect } from 'react-router-dom';

export default class FacebookLogin extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    // This binding is necessary to make `this` work in the callback
    this.onLogout = this.onLogout.bind(this);
  }
  
  handleResponse = (data) => {

    if (data.profile.verified  === true) {
      this.setState({ redirectToReferrer: true ,name: data.profile.last_name});     
    } else {
      this.setState({ redirectToReferrer: false }); 
    }
    
  }

  handleError = (error) => {
    this.setState({ redirectToReferrer: false });
  }
  
  onLogout(response) {
    this.setState({
      redirectToReferrer: false
    });
 }
  render() {
   
   const { redirectToReferrer } = this.state;
   const { name } = this.state;

    if (redirectToReferrer) {
      return (
        <div>
         <p>Welcome {name} </p>
         <button onClick={this.onLogout}>Facebook Logout</button>
         </div>
        );
    }
    return (
      <FacebookProvider appId="413229905797521">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <button>Facebook Login</button>
        </Login>
      </FacebookProvider>
    );
  }
}