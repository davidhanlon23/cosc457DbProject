import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
  import fakeAuth from './pages/login';
//import { BrowserRouter, Route } from 'react-router-dom';
//import Header from './components/layout/header';
//import Menu from './components/layout/menu';
import Home from './pages/home';
import BookOnline from './pages/book-online';
import Artists from './pages/artists';
import Footer from './components/layout/footer';
import Gallery from './pages/gallery';
//import Contact from './pages/contact';
import NewNavigation from './components/layout/new-navigation';
import Admin from './components/admin';
import PrivateRoute from './components/privateRoute';
import Login from './pages/login';


ReactDOM.render(
<BrowserRouter>
    <React.Fragment>
        <Route path ='/' component={NewNavigation}/>
        <Route path ='/' exact component={Home}/>
        <Route path ='/book-online' component={BookOnline}/>
        <Route path ='/artists' component={Artists}/>
        <Route path ='/gallery' component={Gallery}/>
        {/* <Route path ='/contact' component={Contact}/> */}
       
        <Route path='/login' component={Login}/>
        <PrivateRoute authed={fakeAuth.isAuthenticated} path='/admin' component={Admin}/>
        
        <Route path ='/' component={Footer}/>


        
   
   
    </React.Fragment>
</BrowserRouter>
, document.getElementById('root'));
// registerServiceWorker();
