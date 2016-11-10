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
	            titleStyle={[styles.titleStyle]}
	            selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}			
			    selected={this.props.tab === 'test'}
			    title={this.props.tab === 'test' ? 'test标题' : null}
			    renderIcon={() => <Icon name='whatshot' size={26} />}
			    renderSelectedIcon={() => <Icon color={colors.primary} name='whatshot' size={26} />}
			    onPress={this.onTabSelect.bind(this,'test')}>
				{this._addNavigator(TestView,'test标题')}
			  </Tab>
			  <Tab
			    tabStyle={this.props.tab !== 'test2' && { marginBottom: -6 }}
	            titleStyle={[styles.titleStyle, {marginTop: -1}]}
	            selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}	
			    selected={this.props.tab === 'test2'}
			    title={this.props.tab === 'test2' ? 'test2标题' : null}
			    renderIcon={() => <Icon style={{paddingBottom: 4}} name='contacts' size={26} />}
			    renderSelectedIcon={() => <Icon color={colors.primary} name='contacts' size={26} />}
			    onPress={this.onTabSelect.bind(this,'test2')}>
				{this._addNavigator(Test2View,'test2标题')}
			  </Tab>
			</Tabs>
		);
	}
}

// styles
const styles = StyleSheet.create({
	container:{
		flex:1
	},
    titleStyle: {
      ...Platform.select({
        ios: {
          fontFamily: fonts.ios.black
        }
      })
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