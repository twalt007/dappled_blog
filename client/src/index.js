import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import {createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducers';
// import thunk from '.middleware/thunk';

import App from './components/app';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
