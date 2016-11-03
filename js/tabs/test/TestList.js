import React,{Component} from 'react';
import {
	ListView,
	StyleSheet,
	RefreshControl,
	Image,
	View,
} from 'react-native';
// 平台组件
import MyTouchable from '../../common/MyTouchable';
import {Text} from '../../common/MyText';

export default class TestList extends Component {
	render() {
		return (
            <MyTouchable
                ref='button'
                underlayColor='transparent'
                onPress={()=>{}}>
                <View style={{padding:5}}>
                <Text>hello</Text>
                </View>
            </MyTouchable>
		);
	}
}