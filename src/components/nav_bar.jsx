import React, { Component } from 'react';
import '../css/nav_bar.css';
class NavBar extends Component {


  render() {
    return (

    
      <div className="">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/artists">Artists</a></li>
          <li><a href="merchandise">Merchandise</a></li>
          <li><a href="piercings">Piercings</a></li>
          <li><a href="reservations">Reservations</a></li>
        </ul>
      </div>

    );
  }
}

export default NavBar;