import React,{Component} from 'react';
import {
	StyleSheet,
	Image,
	View,
	Text,
	Linking,
	WebView,
} from 'react-native';
// common
import MyContainer from '../../common/MyContainer';
// 助手
import {getImage} from '../../helpers/getImage';
// 组件,只支持text和链接
import HTML from "react-native-htmlview";
import MyNavBar from '../../common/MyNavBar';

export default class TestDetail extends Component{
	// 打开浏览器
	handlePress(url){
		Linking.openURL(url);
	}

    _getNavBarConfig(){
      let leftButtonConfig = {
          title: '返回',
          handler: ()=>{
              this.props.navigator.pop();
          }
      };
      return leftButtonConfig;
    }

	render(){
		const {row,name} = this.props;
		const logo_url = getImage(row.logo);
		const qrcode_url = getImage(row.qrcode);
		const webview = <WebView
						ref={(ref) => {this.webviewRef = ref}}
						startInLoadingState={true}
						source={{uri:row.content_url}}
						/>
		return (
	        <MyContainer
	          title='{name}'
	          leftButtonConfig={this._getNavBarConfig()}
	        >
	         {webview}
       		 </MyContainer>
		);
	}
}

const styles = StyleSheet.create({
	logo:{
	    borderRadius: 40,
	    width: 80,
	    height: 80,
	    borderWidth: 2,
	    borderColor: "#fff"
	}
});