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
  loadConfig
} from '../../actions';
import TestList from './TestList';
// import MyButton from '../../common/MyButton';

class TestView extends Component {
  render() {
    let content = 
      <TestList/>
    ;
    return (
      <View style={styles.container}>
          <TouchableHighlight
                style={{padding:6}}
                onPress={() => this.props.dispatch(loadConfig())} 
                underlayColor='transparent'>
                <Text>aaa</Text>
            </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

function select(store){
  return {
    'apiURL':store.config.apiURL
  };
}


export default connect(select)(TestView);