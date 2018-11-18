import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import Header from '../components/layout/header';
import NavBar from '../components/nav_bar.jsx';

class Artists extends Component {


  render() {
    this.props.history.push('/artists'); 
    return (

    
      <div className="">
        {/* <Route path ='/' component={Header}/> */}
        <Route path ='/artists' component = {NavBar}/>
        <section>
        <h3>Welcome to the Artist Page</h3>
        </section>
        

      </div>

    );
  }
}

export default Artists;