import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  View,
  Text,
} from 'react-native';
// redux的connect
import {connect} from 'react-redux';
// redux的actions
import {
	switchTab
} from '../actions';
// tab页面
import TestView from './test/TestView';

class TabsView extends Component {
	// 选择菜单
    onTabSelect(tab) {
      	if (this.props.tab !== tab) {
      	  	this.props.onTabSelect(tab);
      	}
    }
 _renderContent(color, pageText, num) {
    return (
      <View>
        <Text>{pageText}</Text>
        <Text>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }
	render(){
		return (
			<TabBarIOS tiniColor="#032250">
				<TabBarIOS.Item
			    	title="测试菜单"
			    	selected={this.props.tab === 'test'}
			    	icon={require('./test/img/maps-icon.png')}
			    	selectedIcon={require('./test/img/maps-icon-active.png')}
			    	onPress={this.onTabSelect.bind(this,'test')}>
			    	<TestView navigator={this.props.navigator}/>
				</TabBarIOS.Item>
				<TabBarIOS.Item
			    	title="测试菜单2"
			    	selected={this.props.tab === 'test2'}
			    	icon={require('./test/img/maps-icon.png')}
			    	selectedIcon={require('./test/img/maps-icon-active.png')}
			    	onPress={this.onTabSelect.bind(this,'test2')}>
			    	{this._renderContent('#783E33', 'Red Tab', 23)}
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}

// redux
function select(store){
  return {
    'tab':store.navigation.tab,
  };
}

function actions(dispatch){
  return {
    onTabSelect:(tab)=>dispatch(switchTab(tab))
  };
}
export default connect(select,actions)(TabsView);