import React,{Component} from 'react';
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableHighlight,
	Linking,
	WebView,
} from 'react-native';
// 助手-获取图片
import {getImage} from '../../helpers/getImage';
// 组件,只支持text和链接
import HTML from "react-native-htmlview";
// 定义常量
const WEBVIEW_REF = 'webview_ref';
export default class TestDetail extends Component{
	// 打开浏览器
	handlePress(url){
		Linking.openURL(url);
	}

	render(){
		const {row} = this.props;
		const logo_url = getImage(row.logo);
		const qrcode_url = getImage(row.qrcode);
		const webview = <WebView
						ref={WEBVIEW_REF}
						startInLoadingState={true}
						source={{uri:row.content_url}}
						/>
		return (
			<View style={{flex:1}}>
				{/*<Image source={{uri:logo_url}} style={styles.logo} />
				<Image source={{uri:qrcode_url}} style={styles.logo} />
				<Text>{row.name}</Text>
				<Text>{row.sub_name}</Text>
				<TouchableHighlight
				  accessibilityTraits="button"
				  underlayColor="#3C5EAE"
				  onPress={this.handlePress.bind(this,row.content_url)}
				>
					<View>
						<Text>跳转</Text>
					</View>
				</TouchableHighlight>
	            <Text>
	              <HTML value={row.content} stylesheet={styles}/>
	            </Text>*/}
	            {webview}
			</View>			
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