import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 页面
import ReduxTest from './view/ReduxTest';

export default class react_native extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title:'首页',
          component:ReduxTest,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});