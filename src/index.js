import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import initRed from './store/initRed';
import initState from './store/initState';

let bas = createStore ( initRed , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = { bas } >
        <App />
    </Provider>
    ,document.getElementById('root'));

