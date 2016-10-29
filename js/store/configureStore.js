'use strict';

import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

// var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

// var logger = createLogger({
//   predicate: (getState, action) => isDebuggingInChrome,
//   collapsed: true,
//   duration: true,
// });

// var createF8Store = applyMiddleware(thunk)(createStore);
// var createF8Store = applyMiddleware(thunk, promise, array, analytics, logger)(createStore);
function configureStore(){
	// const store = createF8Store(reducers);
	const store = createStore(reducers);
	return store;
}

module.exports = configureStore;