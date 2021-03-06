import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {
  loadConfig,
} from '../actions';

class ReduxTest extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <View style={[styles.height160,styles.row]}>
         <View style={[styles.height160,styles.part_1_right]}>
              <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>{this.props.apiURL}</Text>
                 <TouchableHighlight onPress={this.props.loadConfig}>
                 <Text>点击3333222次</Text>
              </TouchableHighlight>
          </View>
          <View style={[styles.height160,styles.part_1_right]}>
              <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>{this.props.apiURL}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    marginTop:50,
  },
  height160: {
    height:160
  },
  part_1_left: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DCD7CD',
  },
  part_1_right: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#DCD7CD',
  },
  font30: {
    fontSize: 90,
  },
  marTop18:{
      marginTop:18,
  },
  marTop14:{
      marginTop:14,
  },
  font14:{
      fontSize:14,
  },
  font10:{
      fontSize:12,
  },
  yue:{
      height:80,
  },
  green:{
      color:'#55A44B',
      fontWeight: '900'
  },
  red:{
      color: '#FF3F0D',
      fontWeight: '900'
  },
  marLeft10:{
      marginLeft:10,
  },
  hanbao:{
      height:55,
      width:55
  }
});

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

export default connect(select,actions)(ReduxTest);
