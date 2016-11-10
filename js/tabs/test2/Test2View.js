import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';
import {connect} from 'react-redux';

// 页面子组件
// import RNElements from './RNElements';
import ParallaxViewComponent from './ParallaxViewComponent';

class Test2View extends Component {
  render() {
    return (
        <ParallaxViewComponent/>
    );
  }
}

// const styles = StyleSheet.create({
//   contentContainer:{
//     paddingVertical: 20,
//   },
//   container:{
//     flex: 1,
//     backgroundColor: "white",
//     flexDirection: "column",
//     justifyContent: "center"
//   },
//   row:{
//     flexDirection:'row',
//   },
//   height160: {
//     height:160
//   },
//   part_1_left: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#DCD7CD',
//   },
//   part_1_right: {
//     flex: 2,
//     borderWidth: 1,
//     borderColor: '#DCD7CD',
//   },
//   font30: {
//     fontSize: 90,
//   },
//   marTop18:{
//       marginTop:18,
//   },
//   marTop14:{
//       marginTop:14,
//   },
//   font14:{
//       fontSize:14,
//   },
//   font10:{
//       fontSize:12,
//   },
//   yue:{
//       height:80,
//   },
//   green:{
//       color:'#55A44B',
//       fontWeight: '900'
//   },
//   red:{
//       color: '#FF3F0D',
//       fontWeight: '900'
//   },
//   marLeft10:{
//       marginLeft:10,
//   },
//   hanbao:{
//       height:55,
//       width:55
//   }
// });

function select(store){
  return {
    'apiURL':store.config.apiURL
  };
}

function actions(dispatch){
  return {
    loadConfig:()=>dispatch(loadConfig())
  };
}

export default connect(select,actions)(Test2View);
