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
// 友盟推送
import UmengPush from 'react-native-umeng-push';

class react_native extends Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    // this.props.dispatch(loadConfig());
    // this.props.dispatch(loadSessions());
    if(!__DEV__){
      CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});

      //获取DeviceToken
      UmengPush.getDeviceToken(deviceToken => {
          console.log("deviceToken: ", deviceToken);
      });

      //接收到推送消息回调
      UmengPush.didReceiveMessage(message => {
          console.log("didReceiveMessage:", message);
      });

      //点击推送消息打开应用回调
      UmengPush.didOpenMessage(message => {
          console.log("didOpenMessage:", message);
      });      
    }

  }
  handleAppStateChange(appState) {
    if (appState === 'active' && !__DEV__) {
      CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <MyNavigator/>
         {/*<TestView/>*/}
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