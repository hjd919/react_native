import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  View,
  Text,
  Dimensions,
} from 'react-native';

// redux
import {connect} from 'react-redux';
// import {
// 	logIn
// } from '../actions/user';

// import ModalBox from 'react-native-modalbox';
// import Spinner from 'react-native-spinkit';

import CommonStyles from '../common/styles/CommonStyles';


class LoginView extends Component {
	render(){
    return (<View style={[CommonStyles.wrapper]}>
          <Text>登录页</Text>
          </View>);
	}
}

var styles = StyleSheet.create({
    loginWrap: {
      backgroundColor: '#FCE9D4',
    },
      
})

function select(store) {
	return {};
}

function actions(dispatch){
	return {};
}

export default connect(select,actions)(LoginView);