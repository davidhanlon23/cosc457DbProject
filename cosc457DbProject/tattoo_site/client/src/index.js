import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Home from './pages/home';
import RequestForm from './pages/request-form';
import Inquiry from './pages/inquiries';


ReactDOM.render(
<BrowserRouter>
    <React.Fragment>
        <Route path ='/' component={Header}/>
        <Route path ='/' exact component={RequestForm}/>
        {/* <Route path ='/request-info' component={RequestForm}/> */}
        <Route path ='/inquiries' component={Inquiry}/>
    </React.Fragment>
</BrowserRouter>
, document.getElementById('root'));
// registerServiceWorker();
