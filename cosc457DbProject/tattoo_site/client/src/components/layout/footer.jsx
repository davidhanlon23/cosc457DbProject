import React from 'react';
import Menu from './menu';
import {NavLink} from 'react-router-dom';
//import bootstrap from '../../css/bootstrap/bootstrap.css';

const Footer = () => {
    return (
   
    
    <section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5> Column 1</h5>
					<ul class="list-unstyled quick-links">
                        <li><NavLink exact ={true} to ='/'><i class="fa fa-angle-double-right"></i> Home</NavLink></li>
                        <li><NavLink exact ={true} to ='/artists'><i class="fa fa-angle-double-right"></i> Artists</NavLink></li>
                        <li><NavLink exact ={true} to ='/schedule-appointment'><i class="fa fa-angle-double-right"></i> Schedule Appointment</NavLink></li>
                        <li><NavLink exact ={true} to ='/gallery'><i class="fa fa-angle-double-right"></i>Gallery</NavLink></li>
                    </ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5> Column 2</h5>
					<ul class="list-unstyled quick-links">
                        <li><NavLink exact ={true} to ='/'><i class="fa fa-angle-double-right"></i> Home</NavLink></li>
                        <li><NavLink exact ={true} to ='/artists'><i class="fa fa-angle-double-right"></i> Artists</NavLink></li>
                        <li><NavLink exact ={true} to ='/schedule-appointment'><i class="fa fa-angle-double-right"></i> Schedule Appointment</NavLink></li>
                        <li><NavLink exact ={true} to ='/gallery'><i class="fa fa-angle-double-right"></i>Gallery</NavLink></li>
                    </ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5> Column 3</h5>
					<ul class="list-unstyled quick-links">
                        <li><NavLink exact ={true} to ='/'><i class="fa fa-angle-double-right"></i> Home</NavLink></li>
                        <li><NavLink exact ={true} to ='/artists'><i class="fa fa-angle-double-right"></i> Artists</NavLink></li>
                        <li><NavLink exact ={true} to ='/schedule-appointment'><i class="fa fa-angle-double-right"></i> Schedule Appointment</NavLink></li>
                        <li><NavLink exact ={true} to ='/gallery'><i class="fa fa-angle-double-right"></i>Gallery</NavLink></li>
						
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.google.com"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr></hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p class="h6">&copy All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
				</div>
				<hr></hr>
			</div>	
		</div>
	</section>
    
        
    );
};

export default Footer;