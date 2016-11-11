import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
// tab页
import TabsView from './tabs/TabsView';

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
    let Component = route.component;
    return (
        <Component {...route.params} navigator={navigator}/>
    );
    // return <TabsView navigator={navigator} />;
  }
  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={{
              name: 'TabsView',
              component:TabsView
        }}
        configureScene={(route)=>this.configureScene(route)}
        renderScene={(route,navigator)=>this.renderScene(route,navigator)}
      />
    );
  }
}
