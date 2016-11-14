import React, { Component } from 'react';
import {
  StyleSheet,
  // NavigatorIOS,
  // TabBarIOS,
  // View,
  // Text,
  // Platform,
  Navigator,
} from 'react-native';

// common
import colors from '../configs/colors.json';
import MyContainer from '../common/MyContainer';

// redux
import {connect} from 'react-redux';
import {
	switchTab
} from '../actions';

// tab页面
import TestView from './test/TestView';
import Test2View from './test2/Test2View';
import MineView from './mine/MineView';
import LoginView from '../login/LoginView';

// 第三方组件
import { Tabs, Tab, Icon } from 'react-native-elements'
import NavigatorBar from 'react-native-navbar'

class TabsView extends Component {
	// 选择菜单
    onTabSelect(tab) {
      	if (this.props.tab !== tab) {
      	  	this.props.onTabSelect(tab);
      	}
    }
	_renderTab(Component, selectedTab, title, iconName){
		return (
			<Tab
			    title={title}
	            titleStyle={styles.titleStyle}
	            selectedTitleStyle={styles.titleStyleSelected}	
			    renderIcon={() => <Icon color={colors.black3} name={iconName} />}
			    renderSelectedIcon={() => <Icon color={colors.black1} name={iconName} />}
			    selected={this.props.tab === selectedTab}
			    onPress={this.onTabSelect.bind(this,selectedTab)}>
				<Component 
            		navigator={this.props.navigator}
            		{...this.props}
				/>
			</Tab>
		);
	}
	render(){
		return (
			<Tabs>
              {this._renderTab(TestView, 'test', '发现', 'explore')}
              {this._renderTab(Test2View, 'test2', '消息', 'message')}
              {this._renderTab(MineView, 'mine', '我的', 'account-circle')}
			</Tabs>
		);
	}
}
var styles = StyleSheet.create({
	titleStyle : {
		color:colors.black3,
	},
	titleStyleSelected : {
		color:colors.black1,
	},
});

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