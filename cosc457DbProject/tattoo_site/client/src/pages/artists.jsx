import React from 'react';
import gal1 from '../img/Gallery/gal1.jpg';
import bullett from '../img/artists/bullett.png';
import tommy from '../img/artists/tommy.png';
import chris from '../img/artists/chris.png';
import blank from '../img/artists/blank-profile-picture.jpg';
const Artists = () => {
    return (
      
            <section class="team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="col-lg-12">
                                <h6 class="description">OUR TEAM</h6>
                                <div class="row pt-md">
                                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                                        <div class="img-box">
                                            <img src={bullett} style={{width: 300, height: 375}} class="img-responsive"/>
                                            <ul class="text-center">
                                            <a href="https://www.facebook.com/Bullettsink/?__tn__=%2Cdk%2CP-R&eid=ARB4HeullY6Q83SnuA2J4h7xYXEHZS6xP4trKdxnPpquQC5cQ3giinC4N3VwxIUSc0aMl_XCBj_wfrYJ&fref=tag"><li><i class="fa fa-facebook"></i></li></a>
                                            <a href="#"><li><i class="fa fa-instagram"></i></li></a>
                                            
                                            </ul>
                                        </div>
                                    <h1>Bullett Elmore</h1>
                                    <h2>Owner/Tattoo Artist</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>


                                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                                        <div class="img-box">
                                            <img src={chris} style={{width: 300, height: 375}} class="img-responsive"/>
                                            <ul class="text-center">
                                            <a href="https://www.facebook.com/Bullettsink/?__tn__=%2Cdk%2CP-R&eid=ARB4HeullY6Q83SnuA2J4h7xYXEHZS6xP4trKdxnPpquQC5cQ3giinC4N3VwxIUSc0aMl_XCBj_wfrYJ&fref=tag"><li><i class="fa fa-facebook"></i></li></a>
                                            <a href="#"><li><i class="fa fa-instagram"></i></li></a>
 
                                            </ul>
                                        </div>
                                    <h1>Christopher Spoon  </h1>
                                    <h2>Tattoo Artist</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>


                                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                                        <div class="img-box">
                                            <img src={tommy} style={{width: 300, height: 375}} class="img-responsive"/>
                                            <ul class="text-center">
                                            <a href="https://www.facebook.com/Bullettsink/?__tn__=%2Cdk%2CP-R&eid=ARB4HeullY6Q83SnuA2J4h7xYXEHZS6xP4trKdxnPpquQC5cQ3giinC4N3VwxIUSc0aMl_XCBj_wfrYJ&fref=tag"><li><i class="fa fa-facebook"></i></li></a>
                                            <a href="https://www.instagram.com/wtc3art/?hl=en"><li><i class="fa fa-instagram"></i></li></a>

                                            </ul>
                                        </div>
                                    <h1>Tommy Coon</h1>
                                    <h2>Tattoo Artist</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                                    <div class="img-box">
                                        <img src={blank} style={{width: 300, height: 375}} class="img-responsive"/>
                                        <ul class="text-center">
                                        <a href="https://www.facebook.com/Bullettsink/?__tn__=%2Cdk%2CP-R&eid=ARB4HeullY6Q83SnuA2J4h7xYXEHZS6xP4trKdxnPpquQC5cQ3giinC4N3VwxIUSc0aMl_XCBj_wfrYJ&fref=tag"><li><i class="fa fa-facebook"></i></li></a>
                                        <a href="https://www.instagram.com/dennywilliams629/?hl=en"><li><i class="fa fa-instagram"></i></li></a>
                                        </ul>
                                    </div>
                                    <h1>Denny Williams</h1>
                                    <h2>Tattoo Artist</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>

                                    

                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </section>
       
    );
};

export default Artists;