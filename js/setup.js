'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
//应用
import MyApp from './MyApp';

// 注入 Redux Store
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

export default function setup(){

	class react_native extends Component {

		constructor() {
		  super();
		  this.state = {
        	isLoading: true,
		  	store:configureStore(()=>this.setState({isLoading:false})),
		  };
		}

	    render() {
	    	// 等待加载永久数据
	    	if(this.state.isLoading){
	    		console.log('loading app');
	    		return null;
	    	}
	        return (
	        	<Provider store={this.state.store}>
	          	<MyApp/>	
	          </Provider>
	        );
	    }
	}

	return react_native;
}
global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

