import React,{Component} from 'react';
import NavBar from 'react-native-navbar';
import commonStyles from '../styles/commonStyles';

export default class MyNavBar extends Component{
	render() {
		let {title,rightButtonConfig,leftButtonConfig} = this.props;
		return(
	        <NavBar
	          style={commonStyles.navbar}
	          title={title}
	          rightButton={rightButtonConfig?rightButtonConfig:{}}
	          leftButton={leftButtonConfig?leftButtonConfig:{}}
	        />
		);
	}
}