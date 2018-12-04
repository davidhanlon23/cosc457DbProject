import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
  import fakeAuth from '../pages/login';
//import ReactDOM from 'react-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
  export default PrivateRoute;