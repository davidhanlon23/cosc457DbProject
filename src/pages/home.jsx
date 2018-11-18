import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Header from '../components/layout/header';
import NavBar from '../components/nav_bar.jsx';

class Home extends Component {


  render() {
    return (

    
      <div className="">
        {/* <Route path ='/' component={Header}/> */}
        <Route path ='/' component = {NavBar}/>
        <section>
        <h3>Welcome to the Home Page</h3>
        </section>
        

      </div>

    );
  }
}

export default Home;