import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//redux
// import thunk from 'redux-thunk';
import appReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
var store = createStore(appReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));

serviceWorker.unregister();
