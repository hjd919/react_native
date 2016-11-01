import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
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
import Test2View from './test2/Test2View';

class TabsView extends Component {
	// 选择菜单
    onTabSelect(tab) {
      	if (this.props.tab !== tab) {
      	  	this.props.onTabSelect(tab);
      	}
    }
	_addNavigator(component,title) {
	    return (
	    	<NavigatorIOS
	        style={styles.container}
	        barTintColor='#000'
	        titleTextColor="#fff"
	        tintColor="#fff"
	        translucent={true}
	        initialRoute={{
	            component: component,
	            title: title,
	     	}} />
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
				    {this._addNavigator(TestView,'test标题')}
				</TabBarIOS.Item>
				<TabBarIOS.Item
			    	title="测试菜单2"
			    	selected={this.props.tab === 'test2'}
			    	icon={require('./test/img/maps-icon.png')}
			    	selectedIcon={require('./test/img/maps-icon-active.png')}
			    	onPress={this.onTabSelect.bind(this,'test2')}>
				    {this._addNavigator(Test2View,'test2标题')}
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}

// styles
const styles = StyleSheet.create({
	container:{
		flex:1,
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