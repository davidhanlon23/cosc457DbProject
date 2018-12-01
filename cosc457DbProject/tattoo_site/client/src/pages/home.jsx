import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import '../../css/index.css';
//import Header from '../../components/layout/header';
const MY_API = 'AIzaSyCftvFVQlonprlXUmTKhLMTGba1eNiiidA'
let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=39.363312,-77.162910`
class Home extends Component {


  render() {
    return (

    
  <main>
    <section>
        {/* <Route path ='/' component={Header}/> */}
        {/* <section>
        <h3>Welcome to the Home Page</h3>
        </section> */}
        
        

        
        <div>
          <h2>WELCOME TO BULLETT'S INK TATTOO & PIERCING</h2>
          <p> Bullett's Ink is Carrol County's one stop shop
             for all of your custom tattoo needs. One of our 
             amazing artists will work with you on an individual 
             vasis to create a custom piece of art you wont soon regret!! 
             Stop in and check us out!
          </p>
        </div>

        <div class = "contact_info">
          <h1>CONTACT US</h1>
          <div>
            <h2>ADDRESS</h2>

            <div id ="bulletts_location">
              <span class="glyphicon glyphicon-map-marker">   1603 Ridgeside Dr, Mount Airy, MD 21771</span>
            </div>
            
            
            <div id = "contact_number">
              <a href="tel:3018298500"><span class="glyphicon glyphicon-earphone">   (301)-829-8500</span></a>
            </div>
            
            <div id ="contact_email">
              <a href="mailto: bullettsinkstaff@gmail.com"><span class="glyphicon glyphicon-envelope">    bullettsinkstaff@gmail.com</span></a>
            </div>
           
          
          </div>
        </div>

        <div class = "hours_of_operation">
          <h2>Hours of Operation</h2>
            <p>Monday:    10:00 AM - 8:00 PM</p>
            <p>Tuesday:   10:00 AM - 8:00 PM </p>
            <p>Wednesday: 12:00 PM - 8:00 PM</p>
            <p>Thursday:  10:00 AM - 8:00 PM </p>
            <p>Friday:    10:00 AM - 8:00 PM</p>
            <p>Saturday:  10:00 AM - 8:00 PM</p>
            <p>Sunday:    CLOSED</p>
          
        </div>


        {/* adding map form here */}
  
   
      
</section>
<div id = "map_border" ></div>
<section>
  <iframe frameBorder="0" style={{ width: "100%", height: "650"}} 
    src={_url}>
  </iframe> 
</section>
<div id = "map_border" ></div>

</main>





    );
  }
}

export default Home;