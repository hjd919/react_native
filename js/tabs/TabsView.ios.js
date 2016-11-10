import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  View,
  Text,
  Platform,
} from 'react-native';
import colors from '../configs/colors.json';
import fonts from '../configs/fonts.json';
// redux的connect,actions
import {connect} from 'react-redux';
import {
	switchTab
} from '../actions';
// tab页面
import TestView from './test/TestView';
import Test2View from './test2/Test2View';
import MineView from './mine/MineView';
import LoginView from '../login/LoginView';
// 组件
import { Tabs, Tab, Icon } from 'react-native-elements'

class TabsView extends Component {
	// 选择菜单
    onTabSelect(tab) {
      	if (this.props.tab !== tab) {
      	  	this.props.onTabSelect(tab);
      	}
    }
	_addNavigator(component,title) {
		if(title == '我'){
			// 判断登录
			const{isLoggedIn} = this.props;
			if(!isLoggedIn){
				component = LoginView;
			}
		}
	    return (
	    	<NavigatorIOS
	        style={styles.container}
	        titleTextColor="#333"
	        tintColor="#dadada"
	        translucent={false}
	        initialRoute={{
	            component: component,
	            title: title,
	     	}} />
	    );
	}
	render(){
		return (
			<Tabs>
			  <Tab
			    title='发现'
	            titleStyle={[styles.titleStyle]}
	            selectedTitleStyle={[styles.titleSelected]}	
			    selected={this.props.tab === 'test'}
	            icon={styles.titleSelected}		
			    renderIcon={() => <Icon color={colors.grey1} name='explore' size={26} />}
			    renderSelectedIcon={() => <Icon color={colors.primary} name='explore' size={26} />}
			    onPress={this.onTabSelect.bind(this,'test')}>
				{this._addNavigator(TestView,'test标题')}
			  </Tab>
			  <Tab
			    title='消息'
	            titleStyle={[styles.titleStyle]}
	            selectedTitleStyle={[styles.titleSelected]}	
			    selected={this.props.tab === 'test2'}
	            icon={styles.titleSelected}
			    renderIcon={() => <Icon color={colors.grey1} name='message' size={26} />}
			    renderSelectedIcon={() => <Icon color={colors.primary} name='message' size={26} />}
			    onPress={this.onTabSelect.bind(this,'test2')}>
				{this._addNavigator(Test2View,'test2标题')}
			  </Tab>
			  <Tab
			    title='我的'
	            titleStyle={[styles.titleStyle]}
	            selectedTitleStyle={[styles.titleSelected]}	
			    selected={this.props.tab === 'mine'}
	            icon={styles.titleSelected}
			    renderIcon={() => <Icon color={colors.grey1} name='account-circle' size={26} />}
			    renderSelectedIcon={() => <Icon color={colors.primary} name='account-circle' size={26} />}
			    onPress={this.onTabSelect.bind(this,'mine')}>
				{this._addNavigator(MineView,'mine标题')}
			  </Tab>
			</Tabs>
		);
	}
}

// styles
const styles = StyleSheet.create({
	container:{
		flex:1,
	},
    titleStyle: {
       color: '#666',
    },
    titleSelected:{
    	color:'#333',
    }
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