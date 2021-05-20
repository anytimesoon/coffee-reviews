import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import 'foundation-sites/dist/css/foundation.min.css';
import coffeesReducer from './reducers/coffeesReducer'

const store = createStore(coffeesReducer, applyMiddleware(thunk))


ReactDOM.render(
		<Provider store={store} >
	    <App />
	  </Provider>,
    document.getElementById('root')
);