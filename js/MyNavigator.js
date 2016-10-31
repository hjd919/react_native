import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 导航条
import TabsView from './tabs/TabsView';
// 页面
import ReduxTest from './view/ReduxTest';

export default class react_native extends Component {
  // 变化动画
  configureScene(route){
    if(route.sceneConfig){
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }
  // 导航场景
  renderScene(route, navigator){
    return <TabsView navigator={navigator} />;
  }
  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={{}}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        style={styles.container}
        initialRoute={{}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});