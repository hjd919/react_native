import React, { Component } from 'react';
import {
  View,
  NavigatorIOS,
  StyleSheet
} from 'react-native';
//导航
import MyNavigator from './MyNavigator';

export default class react_native extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});