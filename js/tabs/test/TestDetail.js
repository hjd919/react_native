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
import MyBox from '../../common/MyBox';
import commonStyles from '../../styles/commonStyles';
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
		const {row} = this.props;
		const logo_url = getImage(row.logo);
		const qrcode_url = getImage(row.qrcode);

		const logo = (
	        <MyBox boxTitle="邀请码">
				<View style={commonStyles.justAlign}>
					<Image
						source={{uri:qrcode_url}}
						style={commonStyles.logo}
					/>
				</View>
			</MyBox>
		);

		const webview = (
			<MyBox boxTitle="产品介绍">
				<WebView
					ref={(ref) => {this.webviewRef = ref}}
					startInLoadingState={true}
					source={{uri:row.content_url}}
				/>
			</MyBox>
			);
		return (
	        <MyContainer
	          title={row.name}
	          leftButtonConfig={this._getNavBarConfig()}
	        >
	        {logo}
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