'use strict';

import React, { Component } from 'react';
import MyApp from './MyApp';//应用

// 注入 Redux Store
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

function setup(){

	class react_native extends Component {

		constructor() {
		  super();
		
		  this.state = {
		  	store:configureStore(),
		  };
		}

	    render() {
	      return (
	      	<Provider store={this.state.store}>
	        	<MyApp/>	
	        </Provider>
	      );
	    }
	}

	return react_native;
}

module.exports = setup;

