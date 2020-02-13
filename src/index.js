import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/Store';
import App from './App';
import {register} from './serviceWorker';
import 'react-app-polyfill/ie11';
ReactDOM.render(
        <Provider store={store}>
           <App />
        </Provider>
        ,
 document.getElementById('root')
);
register();