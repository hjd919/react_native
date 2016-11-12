import React,{Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import MyNavBar from './MyNavBar';

export default class SearchView extends Component {
    _renderNavBar(){
      let leftButtonConfig = {
          title: '返回',
          handler: ()=>{
              this.props.navigator.pop();
          }
      };
      return(
        <MyNavBar
          title={{title:"搜索"}}
          leftButtonConfig={leftButtonConfig}
        />
      );
    }

	render(){
		return (
	      <View>
            {this._renderNavBar()}
	      	<Text>搜索页面</Text>
	      </View>
		);
	}
}