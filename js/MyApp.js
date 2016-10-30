import React, { Component } from 'react';
import {
  View,
  NavigatorIOS,
  AppState,
  StyleSheet
} from 'react-native';
//导航
import MyNavigator from './MyNavigator';
// 热更新
import CodePush from "react-native-code-push";

class react_native extends Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    // this.props.dispatch(loadConfig());
    // this.props.dispatch(loadSessions());
  
    CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
  }
  handleAppStateChange(appState) {
    if (appState === 'active') {
      CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
    }
  }
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

// react_native = codePush(react_native);

export default react_native;