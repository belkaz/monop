import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import configureStore from './store/configStore';

import { Provider } from 'react-redux';

const bas = configureStore();

ReactDOM.render(
    <Provider store = { bas } >
        <App />
    </Provider>
    ,document.getElementById('root'));

 
  