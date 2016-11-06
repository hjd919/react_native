import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import {getImage} from '../../helpers/getImage';
export default class TestCell extends Component{
	render() {
		const {row} = this.props;

		return (
	      <TouchableHighlight underlayColor="#f00" onPress={this.props.handlePressCell}>
	        <View style={styles.card}>
	          <View>
	            <Image
	              style={styles.icon}
	              source={{uri:getImage(row.logo)}}/>
	          </View>
	          <View style={styles.description}>
	            <View><Text>{row.name}</Text></View>
	            <View><Text>{row.sub_name}</Text></View>
	          </View>
	        </View>
	      </TouchableHighlight>

		);
	}
} 


// 组件样式
var styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
  },
  icon: {
    marginRight:10,
    width:50,
    height:50
  },
  description:{
    flex: 1,
    flexDirection:'column'
  }
});
