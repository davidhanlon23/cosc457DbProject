// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';


ReactDOM.render(
<BrowserRouter>
    <React.Fragment>
        <Route path ='/' component={Home}/>
        {/* <Route path ='/' exact component={RequestForm}/> */}
        {/* <Route path ='/request-info' component={RequestForm}/> */}
        {/* <Route path ='/inquiries' component={Inquiry}/>
        <Route path ='/thank-you' component={Submitted}/> */}
    </React.Fragment>
</BrowserRouter>
, document.getElementById('root'));
// registerServiceWorker();
