import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './redux/reducers/Root.reducer'
import { ActionCableProvider } from 'react-actioncable-provider'
import { API_WS_ROOT } from './constants/API.constants'

const store = createStore(reducer, applyMiddleware(thunk));

console.log('store', store.getState())

ReactDOM.render(
<ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
        <App />
    </Provider>
</ActionCableProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
