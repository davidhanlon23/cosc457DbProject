import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Home from './pages/home';
import RequestForm from './pages/schedule-appointment';
import Artists from './pages/artists';
import Footer from './components/layout/footer';
import Gallery from './pages/gallery';
ReactDOM.render(
<BrowserRouter>
    <React.Fragment>
        <Route path ='/' component={Header}/>
        <Route path ='/' exact component={Home}/>
        <Route path ='/schedule-appointment' component={RequestForm}/>
        <Route path ='/artists' component={Artists}/>
        <Route path ='/gallery' component={Gallery}/>
        <Route path ='/' component={Footer}/>
    </React.Fragment>
</BrowserRouter>
, document.getElementById('root'));
// registerServiceWorker();
