import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

  class Login extends React.Component {
  
    constructor() {
      super();
  
      this.state = {
        redirectToReferrer: false
      }
      // binding 'this'
      this.login = this.login.bind(this);
    }
  
    login() {
  
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true })
      })
    }
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) {
        return (
          <Redirect to={from} />
        )
      }
  
      return (
        <div className="jumbotron">
            <h1 className="display-3">Login required</h1>
            <p className="lead">You must log in to view the page at {from.pathname}.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" onClick={this.login} role="button">Login</a>
            </p>
        </div>
      )
    }
  }
  
  /* A fake authentication function */
  export const fakeAuth = {
  
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
       setTimeout(cb, 100)
    },
  }

  export default Login;
 
 